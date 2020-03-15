import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotacionesBasicasComponent } from './anotaciones-basicas.component';

describe('AnotacionesBasicasComponent', () => {
  let component: AnotacionesBasicasComponent;
  let fixture: ComponentFixture<AnotacionesBasicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotacionesBasicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotacionesBasicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
