import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuacionListarComponent } from './actuacion-listar.component';

describe('ActuacionListarComponent', () => {
  let component: ActuacionListarComponent;
  let fixture: ComponentFixture<ActuacionListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuacionListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuacionListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
