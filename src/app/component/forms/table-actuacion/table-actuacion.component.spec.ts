import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableActuacionComponent } from './table-actuacion.component';

describe('TableActuacionComponent', () => {
  let component: TableActuacionComponent;
  let fixture: ComponentFixture<TableActuacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableActuacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableActuacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
