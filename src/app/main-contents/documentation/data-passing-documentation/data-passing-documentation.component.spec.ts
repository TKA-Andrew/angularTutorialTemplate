import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPassingDocumentationComponent } from './data-passing-documentation.component';

describe('DataPassingDocumentationComponent', () => {
  let component: DataPassingDocumentationComponent;
  let fixture: ComponentFixture<DataPassingDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPassingDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPassingDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
