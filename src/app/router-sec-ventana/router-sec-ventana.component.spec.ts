import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterSecVentanaComponent } from './router-sec-ventana.component';

describe('RouterSecVentanaComponent', () => {
  let component: RouterSecVentanaComponent;
  let fixture: ComponentFixture<RouterSecVentanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterSecVentanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterSecVentanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
