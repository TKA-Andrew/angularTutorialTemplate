import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingDocumentationComponent } from './routing-documentation.component';

describe('RoutingDocumentationComponent', () => {
  let component: RoutingDocumentationComponent;
  let fixture: ComponentFixture<RoutingDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
