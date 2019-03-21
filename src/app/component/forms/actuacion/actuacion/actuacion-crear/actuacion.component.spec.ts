import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuacionComponent } from './actuacion.component';

describe('ActuacionComponent', () => {
  let component: ActuacionComponent;
  let fixture: ComponentFixture<ActuacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
