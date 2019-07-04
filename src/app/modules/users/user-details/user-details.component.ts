import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userInfo: any = [];

  constructor(private shared: SharedService) {}

  ngOnInit() {
    this.getUserDetails();
    console.log('USER INFO RETRIEVED', this.userInfo);
  }

  getUserDetails() {
    this.shared.userInfo.subscribe(
      response => {
        this.userInfo = response;
      },
      err => {
        console.log('ERROR:', err);
      }
    );
  }
}
