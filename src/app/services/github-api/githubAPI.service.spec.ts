import { GitHubAPIService } from './githubAPI.service';
import { TestBed } from '@angular/core/testing';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitHubAPIService = TestBed.get(GitHubAPIService);
    expect(service).toBeTruthy();
  });
});
