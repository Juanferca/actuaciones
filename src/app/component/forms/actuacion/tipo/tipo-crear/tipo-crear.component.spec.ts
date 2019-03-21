import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCrearComponent } from './tipo-crear.component';

describe('TipoCrearComponent', () => {
  let component: TipoCrearComponent;
  let fixture: ComponentFixture<TipoCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
