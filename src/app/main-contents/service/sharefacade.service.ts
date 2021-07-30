import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { BusyService } from './busy.service';
import { DataProcessingService, KeyOrderConfig } from './dataProcessing.service';
import { HttpCancelService } from './httpCancel.service';

@Injectable()
export class ShareFacadeService {
    // Singleton Pattern
    // tslint:disable-next-line: variable-name
    private _busyService: BusyService;
    public get busyService(): BusyService {
        if (!this._busyService) {
            this._busyService = this.injector.get(BusyService);
        }
        return this._busyService;
    }

    // tslint:disable-next-line: variable-name
    private _dataProcessingService: DataProcessingService;
    public get dataProcessingService(): DataProcessingService {
        if (!this._dataProcessingService) {
            this._dataProcessingService = this.injector.get(DataProcessingService);
        }
        return this._dataProcessingService;
    }

    // tslint:disable-next-line: variable-name
    private _httpCancelService: HttpCancelService;
    public get httpCancelService(): HttpCancelService {
        if (!this._httpCancelService) {
            this._httpCancelService = this.injector.get(HttpCancelService);
        }
        return this._httpCancelService;
    }

    constructor(
        private injector: Injector,
        private snackBar: MatSnackBar
    ) {}

    public initSpinnerBS = this.busyService.initSpinnerBS;
    public spinnerBS = this.busyService.spinnerBS;
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
    convertArrayToObject(arrayOfObjects: unknown[], key: string): Record<string, unknown> {
        return this.dataProcessingService.convertArrayToObject(arrayOfObjects, key);
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

}
