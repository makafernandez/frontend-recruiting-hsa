import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss']
})
export class UserReposComponent implements OnInit {
  repoList: any = [];

  constructor(private shared: SharedService) {}

  ngOnInit() {
    this.getRepoList();
    console.log('USER REPOS RETRIEVED', this.repoList);
  }

  getRepoList() {
    this.shared.userRepos.subscribe(
      response => {
        this.repoList = response;
      },
      err => {
        console.log('ERROR:', err);
      }
    );
  }
}
