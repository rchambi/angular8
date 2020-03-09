import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterHijasUsuariosDetalleComponent } from './router-hijas-usuarios-detalle.component';

describe('RouterHijasUsuariosDetalleComponent', () => {
  let component: RouterHijasUsuariosDetalleComponent;
  let fixture: ComponentFixture<RouterHijasUsuariosDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterHijasUsuariosDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterHijasUsuariosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
