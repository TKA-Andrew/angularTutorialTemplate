import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ShareFacadeService } from '../../service/sharefacade.service';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-tutorial-httpclient',
  templateUrl: './tutorial-httpclient.component.html',
  styleUrls: ['./tutorial-httpclient.component.scss']
})

export class TutorialHttpclientComponent implements OnInit{
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  posts: any;
  postsOfUserId1: Observable<Post[]>;
  postRecord: Observable<Record<string, Post>>;
  constructor(
    private http: HttpClient,
    private shareFacadeService: ShareFacadeService
  ) { }

  ngOnInit(): void {
    this.posts = this.http.get(this.ROOT_URL + '/posts');

    // better example
    const params = new HttpParams().set('userId', '1');
    this.postsOfUserId1 = this.http.get<Post[]>(this.ROOT_URL + '/posts', { params })
      .pipe(
        catchError((error: any) => {
            console.log('error: ', error);
            return of(null);
        }),
      );
    this.postRecord = this.http.get<Post[]>(this.ROOT_URL + '/posts')
      .pipe(map((posts: Post[]) => {
          const postRecord = this.shareFacadeService.convertCollectionToObject(posts, 'id');
          return postRecord;
      }),
      catchError((error: any) => {
          console.log('error: ', error);
          return of(null);
      }),
    );
  }

}
