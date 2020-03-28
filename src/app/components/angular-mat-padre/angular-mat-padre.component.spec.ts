import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMatPadreComponent } from './angular-mat-padre.component';

describe('AngularMatPadreComponent', () => {
  let component: AngularMatPadreComponent;
  let fixture: ComponentFixture<AngularMatPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMatPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMatPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
