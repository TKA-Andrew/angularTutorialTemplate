import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingTutorialComponent } from './routing-tutorial.component';

describe('RoutingTutorialComponent', () => {
  let component: RoutingTutorialComponent;
  let fixture: ComponentFixture<RoutingTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
