import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActuacionComponent } from './form-actuacion.component';

describe('FormActuacionComponent', () => {
  let component: FormActuacionComponent;
  let fixture: ComponentFixture<FormActuacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormActuacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActuacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
