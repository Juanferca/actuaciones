import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoActuacionComponent } from './estado-actuacion.component';

describe('EstadoActuacionComponent', () => {
  let component: EstadoActuacionComponent;
  let fixture: ComponentFixture<EstadoActuacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoActuacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoActuacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
