import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCancelComponent } from './http-cancel.component';

describe('HttpCancelComponent', () => {
  let component: HttpCancelComponent;
  let fixture: ComponentFixture<HttpCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
