import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoActuacionListarComponent } from './estado-actuacion-listar.component';

describe('EstadoActuacionListarComponent', () => {
  let component: EstadoActuacionListarComponent;
  let fixture: ComponentFixture<EstadoActuacionListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoActuacionListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoActuacionListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
