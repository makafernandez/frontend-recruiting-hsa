import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GitHubAPIService } from '../../../services/github-api/githubAPI.service';
import { SharedService } from './../../../services/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  user: User;
  repoList: any = [];

  constructor(
    private github: GitHubAPIService,
    private shared: SharedService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {}

  onClick(searchTerm: string) {
    this.getUserInfo(searchTerm.toLowerCase());
    this.getRepoList(searchTerm.toLowerCase());
  }

  getUserInfo(username: string) {
    this.github.getUserDetails(username).subscribe(
      response => {
        this.user = {
          name: response.name,
          login: response.login,
          avatar: response.avatar_url,
          email: response.email,
          followers: response.followers,
          repos: response.public_repos,
          bio: response.bio
        };
        this.shareDataUser(this.user);
        // TODO: go to users details
      },
      err => {
        console.log('ERROR:', err.error.message);
        // TODO: if 404 go to 404.html
      }
    );
  }

  getRepoList(username: string) {
    this.github.getUserRepos(username).subscribe(
      response => {
        this.repoList = response.map(repo => {
          return {
            id: repo.id,
            name: repo.name,
            description: repo.description ? repo.description : '...',
            stargazers: repo.stargazers_count
          };
        });
        this.shareDataRepos(this.repoList);
      },
      err => {
        console.log(err);
      }
    );
  }

  shareDataUser(data) {
    this.shared.setDataUser(data);
  }

  shareDataRepos(data) {
    this.shared.setDataRepos(data);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}

export interface User {
  name: string;
  login: string;
  avatar: string;
  email: string;
  followers: number;
  repos: number;
  bio: string;
}
