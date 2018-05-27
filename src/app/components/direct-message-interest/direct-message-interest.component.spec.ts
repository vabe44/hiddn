import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectMessageInterestComponent } from './direct-message-interest.component';

describe('DirectMessageInterestComponent', () => {
  let component: DirectMessageInterestComponent;
  let fixture: ComponentFixture<DirectMessageInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectMessageInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectMessageInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
