import { TestBed } from '@angular/core/testing';

import { PostRouterService } from './post-router.service';

describe('PostRouterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostRouterService = TestBed.get(PostRouterService);
    expect(service).toBeTruthy();
  });
});
