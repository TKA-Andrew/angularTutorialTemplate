import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BusyService {
    public initSpinnerBS = new BehaviorSubject<boolean>(true);
    public spinnerBS = new BehaviorSubject<boolean>(true);
    startInitSpinner(): void{
        this.initSpinnerBS.next(true);
    }

    stopInitSpinner(): void{
        this.initSpinnerBS.next(false);
    }

    startSpinner(): void{
        this.spinnerBS.next(true);
    }

    stopSpinner(): void{
        this.spinnerBS.next(false);
    }
}
