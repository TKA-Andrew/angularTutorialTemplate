import { Component, OnInit } from '@angular/core';
import { ShareFacadeService } from '../../service/sharefacade.service';

@Component({
  selector: 'app-ng-busy-documentation',
  templateUrl: './ng-busy-documentation.component.html',
  styleUrls: ['./ng-busy-documentation.component.scss']
})
export class NgBusyDocumentationComponent implements OnInit {
  public busy: Promise<boolean>;
  private globalResolve;

  constructor(
    private shareFacadeService: ShareFacadeService
  ) { }

  ngOnInit(): void {
    this.shareFacadeService.spinnerBS.subscribe(
        (spin: boolean) => {
            if (spin === true){
                this.getBusy();
            } else {
                this.globalResolve();
            }
        }
    );
  }

  getBusy(): void {
    this.busy = new Promise((resolve, reject) => {
        this.globalResolve = resolve;
    });
  }

  startSpinner(): void {
    this.shareFacadeService.startSpinner();
  }

  stopSpinner(): void {
    this.shareFacadeService.stopSpinner();
  }

}
