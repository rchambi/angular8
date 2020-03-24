import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPadre2Component } from './component-padre2.component';

describe('ComponentPadre2Component', () => {
  let component: ComponentPadre2Component;
  let fixture: ComponentFixture<ComponentPadre2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentPadre2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentPadre2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
