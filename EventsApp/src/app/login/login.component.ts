import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};
  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  LoginUser() {
    this.eventService.loginUser(this.loginUserData).subscribe
      (
        resp => {
          if (resp) {
            console.log(resp);
          }
        }
      );
  }

}
