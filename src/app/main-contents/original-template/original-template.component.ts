import { Component, OnInit } from '@angular/core';
import { ShareFacadeService } from '../service/sharefacade.service';

@Component({
  selector: 'app-original-template',
  templateUrl: './original-template.component.html',
  styleUrls: ['./original-template.component.scss']
})
export class OriginalTemplateComponent implements OnInit{
  public title = 'angular-tutorial-template';
  constructor(
    private shareFacadeService: ShareFacadeService
  ) {}

  ngOnInit(): void {
    this.shareFacadeService.hideMenuIcon();
  }
}
