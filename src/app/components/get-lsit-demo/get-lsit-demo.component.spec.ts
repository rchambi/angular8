import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLsitDemoComponent } from './get-lsit-demo.component';

describe('GetLsitDemoComponent', () => {
  let component: GetLsitDemoComponent;
  let fixture: ComponentFixture<GetLsitDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetLsitDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLsitDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
