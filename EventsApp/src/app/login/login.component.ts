import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};
  constructor(private eventService: EventService, private _router: Router) { }

  ngOnInit() {
  }

  LoginUser() {
    this.eventService.loginUser(this.loginUserData).subscribe
      (
        resp => {
          if (resp) {
            console.log(resp);
            localStorage.setItem('token', resp.token);
            this._router.navigate(['/special']);
          }
        },
        err => console.log(err)
      );
  }

}
