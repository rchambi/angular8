import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRouterComponent } from './post-router.component';

describe('PostRouterComponent', () => {
  let component: PostRouterComponent;
  let fixture: ComponentFixture<PostRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
