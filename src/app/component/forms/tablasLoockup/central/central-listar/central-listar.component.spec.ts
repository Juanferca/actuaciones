import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralListarComponent } from './central-listar.component';

describe('CentralListarComponent', () => {
  let component: CentralListarComponent;
  let fixture: ComponentFixture<CentralListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
