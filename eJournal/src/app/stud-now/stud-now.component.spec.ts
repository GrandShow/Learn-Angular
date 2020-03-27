import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudNowComponent } from './stud-now.component';

describe('StudNowComponent', () => {
  let component: StudNowComponent;
  let fixture: ComponentFixture<StudNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
