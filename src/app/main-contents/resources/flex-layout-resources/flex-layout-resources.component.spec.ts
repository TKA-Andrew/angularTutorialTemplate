import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexLayoutResourcesComponent } from './flex-layout-resources.component';

describe('FlexLayoutResourcesComponent', () => {
  let component: FlexLayoutResourcesComponent;
  let fixture: ComponentFixture<FlexLayoutResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexLayoutResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexLayoutResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
