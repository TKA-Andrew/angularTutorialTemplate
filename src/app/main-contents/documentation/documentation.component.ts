import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ShareFacadeService } from '../service/sharefacade.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements AfterViewInit, OnDestroy {
  @ViewChild('drawer') public drawer: MatDrawer;
  constructor(
    private shareFacadeService: ShareFacadeService
  ) {
    this.shareFacadeService.showMenuIcon();
  }

  ngAfterViewInit(): void {
    this.shareFacadeService.setDrawer(this.drawer);
  }

  ngOnDestroy(): void {
    this.shareFacadeService.hideMenuIcon();
  }

}
