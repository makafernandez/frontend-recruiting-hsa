import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private userInfo = new BehaviorSubject([]);
  user = this.userInfo.asObservable();

  setDataUser(userInfo) {
    this.userInfo.next(userInfo);
  }
}
