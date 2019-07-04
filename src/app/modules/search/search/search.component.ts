import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GitHubAPIService } from '../../../services/github-api/githubAPI.service';
import { SearchBarComponent } from './../search-bar/search-bar.component';
import { SharedService } from './../../../services/shared/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  user: User;

  constructor(private github: GitHubAPIService, private shared: SharedService, fb: FormBuilder) { }

  ngOnInit() { }

  onClick(searchTerm: string) {
    this.search(searchTerm);
  }

  search(searchTerm: string) {
    this.github.getUser(searchTerm)
      .subscribe(response => {
        this.user = {
          name: response.name,
          login: response.login,
          avatar: response.avatar_url,
          email: response.email,
          followers: response.followers,
          repos: response.public_repos,
          bio: response.bio
        };
        this.shareData(this.user);
      }, err => {
        console.log('ERROR:', err);
      });
  }

  shareData(data) {
    this.shared.setDataUser(data);
  }
}

export interface User {
  name: string;
  login: string;
  avatar: string;
  email: string;
  followers: string;
  repos: string;
  bio: string;
}
