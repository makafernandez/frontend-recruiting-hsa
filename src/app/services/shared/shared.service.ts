import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private userInfoBehavior = new BehaviorSubject([]);
  userInfo = this.userInfoBehavior.asObservable();

  private userReposBehavior = new BehaviorSubject([]);
  userRepos = this.userReposBehavior.asObservable();

  setDataUser(userInfo) {
    this.userInfoBehavior.next(userInfo);
    console.log('SHARED DATA USER', userInfo);
  }

  setDataRepos(userRepos) {
    this.userReposBehavior.next(userRepos);
    console.log('SHARED DATA REPOS', userRepos);
  }
}
