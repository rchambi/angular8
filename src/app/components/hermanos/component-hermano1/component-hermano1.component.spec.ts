import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHermano1Component } from './component-hermano1.component';

describe('ComponentHermano1Component', () => {
  let component: ComponentHermano1Component;
  let fixture: ComponentFixture<ComponentHermano1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentHermano1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentHermano1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
