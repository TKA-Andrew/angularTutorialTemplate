import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ShareFacadeService } from '../service/sharefacade.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('drawer') public drawer: MatDrawer;

  constructor(
    private shareFacadeService: ShareFacadeService
  ) { }

  ngOnInit(): void {
    this.shareFacadeService.showMenuIcon();
  }

  ngAfterViewInit(): void {
    this.shareFacadeService.setDrawer(this.drawer);
  }

  ngOnDestroy(): void {
    this.shareFacadeService.hideMenuIcon();
  }
}
