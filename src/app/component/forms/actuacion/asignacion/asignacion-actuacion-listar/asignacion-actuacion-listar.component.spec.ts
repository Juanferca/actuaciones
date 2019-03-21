import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionActuacionListarComponent } from './asignacion-actuacion-listar.component';

describe('AsignacionActuacionListarComponent', () => {
  let component: AsignacionActuacionListarComponent;
  let fixture: ComponentFixture<AsignacionActuacionListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionActuacionListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionActuacionListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
