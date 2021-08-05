import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';

import { BusyService } from './busy.service';
import { DataProcessingService, KeyOrderConfig } from './dataProcessing.service';
import { HttpCancelService } from './httpCancel.service';
import { DrawerService } from './drawer.service';

@Injectable()
export class ShareFacadeService {
    public get busyService(): BusyService {
        if (!this._busyService) {
            this._busyService = this.injector.get(BusyService);
        }
        return this._busyService;
    }
    public get dataProcessingService(): DataProcessingService {
        if (!this._dataProcessingService) {
            this._dataProcessingService = this.injector.get(DataProcessingService);
        }
        return this._dataProcessingService;
    }
    public get httpCancelService(): HttpCancelService {
        if (!this._httpCancelService) {
            this._httpCancelService = this.injector.get(HttpCancelService);
        }
        return this._httpCancelService;
    }
    public get drawerService(): DrawerService {
        if (!this._drawerService) {
            this._drawerService = this.injector.get(DrawerService);
        }
        return this._drawerService;
    }

    constructor(
        private injector: Injector,
        private snackBar: MatSnackBar
    ) {}
    // Singleton Pattern
    // tslint:disable-next-line: variable-name
    private _busyService: BusyService;

    // tslint:disable-next-line: variable-name
    private _dataProcessingService: DataProcessingService;

    // tslint:disable-next-line: variable-name
    private _httpCancelService: HttpCancelService;

    // tslint:disable-next-line: variable-name
    private _drawerService: DrawerService;

    public initSpinnerBS = this.busyService.initSpinnerBS;
    public spinnerBS = this.busyService.spinnerBS;

    // SIDEBAR SERVICES
    public menuIconStatusBS: BehaviorSubject<boolean> = this.drawerService.menuIconStatusBS;

    startInitSpinner(): void{
        this.busyService.startInitSpinner();
    }

    stopInitSpinner(): void {
        this.busyService.stopInitSpinner();
    }

    startSpinner(): void {
        this.busyService.startSpinner();
    }

    stopSpinner(): void {
        this.busyService.stopSpinner();
    }

    openSnackBar(message: string, action: string = ''): void {
        this.snackBar.open(message, action, {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
        });
    }

    // DATA PROCESSING SERVICES ------------------------------------------------------------------------------------------
    convertCollectionToObject(arrayOfObjects: unknown[], key: string): Record<string, unknown> {
        return this.dataProcessingService.convertCollectionToObject(arrayOfObjects, key);
    }

    arrangeKeys(originalKeys: string[], orderConfig: KeyOrderConfig[]): string[] {
        return this.dataProcessingService.arrangeKeys(originalKeys, orderConfig);
    }

    arrangeKeysByAliasName(orderConfig: KeyOrderConfig[], recordList: any[]): string[] {
        return this.dataProcessingService.arrangeKeysByAliasName(orderConfig, recordList);
    }

    // HTTP CANCEL PENDING SERVICES
    cancelPendingRequests(): void {
        this.httpCancelService.cancelPendingRequests();
    }

    // SIDEBAR SERVICES
    setDrawer(drawer: MatDrawer): void{
        this.drawerService.setDrawer(drawer);
    }

    toggleDrawer(): void{
        this.drawerService.toggleDrawer();
    }

    showMenuIcon(): void{
        this.drawerService.showMenuIcon();
    }

    hideMenuIcon(): void{
        this.drawerService.hideMenuIcon();
    }

}
