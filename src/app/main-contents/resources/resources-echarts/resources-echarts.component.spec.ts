import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesEchartsComponent } from './resources-echarts.component';

describe('ResourcesEchartsComponent', () => {
  let component: ResourcesEchartsComponent;
  let fixture: ComponentFixture<ResourcesEchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcesEchartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
