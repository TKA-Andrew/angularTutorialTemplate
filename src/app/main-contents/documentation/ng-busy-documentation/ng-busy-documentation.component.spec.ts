import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBusyDocumentationComponent } from './ng-busy-documentation.component';

describe('NgBusyDocumentationComponent', () => {
  let component: NgBusyDocumentationComponent;
  let fixture: ComponentFixture<NgBusyDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgBusyDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBusyDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
