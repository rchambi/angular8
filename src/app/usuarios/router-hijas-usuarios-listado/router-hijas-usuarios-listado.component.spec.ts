import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterHijasUsuariosListadoComponent } from './router-hijas-usuarios-listado.component';

describe('RouterHijasUsuariosListadoComponent', () => {
  let component: RouterHijasUsuariosListadoComponent;
  let fixture: ComponentFixture<RouterHijasUsuariosListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterHijasUsuariosListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterHijasUsuariosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
