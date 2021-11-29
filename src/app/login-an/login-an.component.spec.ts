import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAnComponent } from './login-an.component';

describe('LoginAnComponent', () => {
  let component: LoginAnComponent;
  let fixture: ComponentFixture<LoginAnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
