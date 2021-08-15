import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyNotesComponent } from './udemy-notes.component';

describe('UdemyNotesComponent', () => {
  let component: UdemyNotesComponent;
  let fixture: ComponentFixture<UdemyNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdemyNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
