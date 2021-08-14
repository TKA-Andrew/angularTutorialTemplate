import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialHttpclientComponent } from './tutorial-httpclient.component';

describe('TutorialHttpclientComponent', () => {
  let component: TutorialHttpclientComponent;
  let fixture: ComponentFixture<TutorialHttpclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialHttpclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialHttpclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
