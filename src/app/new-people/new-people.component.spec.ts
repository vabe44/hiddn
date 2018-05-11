import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPeopleComponent } from './new-people.component';

describe('NewPeopleComponent', () => {
  let component: NewPeopleComponent;
  let fixture: ComponentFixture<NewPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
