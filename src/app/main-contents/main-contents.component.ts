import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareFacadeService } from './service/sharefacade.service';

@Component({
  selector: 'app-main-contents',
  templateUrl: './main-contents.component.html',
  styleUrls: ['./main-contents.component.scss']
})
export class MainContentsComponent implements OnInit, OnDestroy {
  constructor(
    public shareFacadeService: ShareFacadeService,
  ) { }

  ngOnInit(): void {
  }

  public toggleDrawer(): void {
    this.shareFacadeService.toggleDrawer();
  }

  ngOnDestroy(): void {
  }

}
