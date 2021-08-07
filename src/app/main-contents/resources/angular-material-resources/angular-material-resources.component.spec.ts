import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialResourcesComponent } from './angular-material-resources.component';

describe('AngularMaterialResourcesComponent', () => {
  let component: AngularMaterialResourcesComponent;
  let fixture: ComponentFixture<AngularMaterialResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMaterialResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
