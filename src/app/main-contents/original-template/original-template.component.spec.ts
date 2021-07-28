import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalTemplateComponent } from './original-template.component';

describe('OriginalTemplateComponent', () => {
  let component: OriginalTemplateComponent;
  let fixture: ComponentFixture<OriginalTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginalTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
