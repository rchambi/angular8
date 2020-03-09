import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchDemoComponent } from './patch-demo.component';

describe('PatchDemoComponent', () => {
  let component: PatchDemoComponent;
  let fixture: ComponentFixture<PatchDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatchDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
