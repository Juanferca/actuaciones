import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncargadoListarComponent } from './encargado-listar.component';

describe('EncargadoListarComponent', () => {
  let component: EncargadoListarComponent;
  let fixture: ComponentFixture<EncargadoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncargadoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncargadoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
