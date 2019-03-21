import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionActuacionCrearComponent } from './asignacion-actuacion-crear.component';

describe('AsignacionActuacionCrearComponent', () => {
  let component: AsignacionActuacionCrearComponent;
  let fixture: ComponentFixture<AsignacionActuacionCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionActuacionCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionActuacionCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
