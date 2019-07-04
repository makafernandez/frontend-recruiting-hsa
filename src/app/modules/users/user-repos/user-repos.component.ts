import { Component, OnInit } from '@angular/core';
import { GitHubAPIService } from './../../../services/github-api/githubAPI.service';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss']
})
export class UserReposComponent implements OnInit {
  repoList: any = [];

  constructor(private github: GitHubAPIService) { }

  ngOnInit() {
    this.getRepoList('makafernandez');
  }

  getRepoList(username: string) {
    this.github.getUserRepos(username)
      .subscribe(response => {
        return response.map(repo => {
          this.repoList.push({
            id: repo.id,
            name: repo.name,
            description: repo.description ? repo.description : '...',
            stargazers: repo.stargazers_count
          });
        });
        // this.shareData(this.user);
      }, err => {
        console.error(err);
      });
  }
}
