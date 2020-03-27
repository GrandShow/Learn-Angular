import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudAllTimeComponent } from './stud-all-time.component';

describe('StudAllTimeComponent', () => {
  let component: StudAllTimeComponent;
  let fixture: ComponentFixture<StudAllTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudAllTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudAllTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
