import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ShareFacadeService } from '../service/sharefacade.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements AfterViewInit, OnDestroy {
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
