import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodashEsComponent } from './lodash-es.component';

describe('LodashEsComponent', () => {
  let component: LodashEsComponent;
  let fixture: ComponentFixture<LodashEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodashEsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodashEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
