import { Component, OnInit } from '@angular/core';
import { GitHubAPIService } from 'src/app/services/github-api/githubAPI.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(github: GitHubAPIService) { }

  ngOnInit() {
  }

}
