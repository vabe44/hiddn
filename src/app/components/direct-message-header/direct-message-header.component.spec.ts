import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectMessageHeaderComponent } from './direct-message-header.component';

describe('DirectMessageHeaderComponent', () => {
  let component: DirectMessageHeaderComponent;
  let fixture: ComponentFixture<DirectMessageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectMessageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectMessageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
