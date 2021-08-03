import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-tutorial',
  templateUrl: './routing-tutorial.component.html',
  styleUrls: ['./routing-tutorial.component.scss']
})
export class RoutingTutorialComponent implements OnInit {
  public userInput = '';
  constructor() { }

  ngOnInit(): void {
  }

}
