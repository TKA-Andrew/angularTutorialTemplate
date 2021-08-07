import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBusyResourcesComponent } from './ng-busy-resources.component';

describe('NgBusyResourcesComponent', () => {
  let component: NgBusyResourcesComponent;
  let fixture: ComponentFixture<NgBusyResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgBusyResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBusyResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
