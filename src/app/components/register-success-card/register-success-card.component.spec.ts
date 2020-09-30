import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSuccessCardComponent } from './register-success-card.component';

describe('RegisterSuccessCardComponent', () => {
  let component: RegisterSuccessCardComponent;
  let fixture: ComponentFixture<RegisterSuccessCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSuccessCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSuccessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
