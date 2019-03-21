import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralCrearComponent } from './central-crear.component';

describe('CentralCrearComponent', () => {
  let component: CentralCrearComponent;
  let fixture: ComponentFixture<CentralCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
