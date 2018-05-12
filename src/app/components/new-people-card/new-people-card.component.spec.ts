import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPeopleCardComponent } from './new-people-card.component';

describe('NewPeopleCardComponent', () => {
  let component: NewPeopleCardComponent;
  let fixture: ComponentFixture<NewPeopleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPeopleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPeopleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
