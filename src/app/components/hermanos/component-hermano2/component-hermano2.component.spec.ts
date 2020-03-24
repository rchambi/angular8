import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHermano2Component } from './component-hermano2.component';

describe('ComponentHermano2Component', () => {
  let component: ComponentHermano2Component;
  let fixture: ComponentFixture<ComponentHermano2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentHermano2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentHermano2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
