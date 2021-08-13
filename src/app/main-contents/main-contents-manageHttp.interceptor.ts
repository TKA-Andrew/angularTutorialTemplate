import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpCancelService } from './service/httpCancel.service';

@Injectable()
export class MainContentsManageHttpInterceptor implements HttpInterceptor {

    constructor(
        private httpCancelService: HttpCancelService) {
    }

    intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
        return next.handle(req).pipe(takeUntil(this.httpCancelService.onCancelPendingRequests()));
    }
}
