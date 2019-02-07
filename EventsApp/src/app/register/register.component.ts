import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {};
  constructor(private eventService: EventService, private _router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this.eventService.registerUser(this.registerUserData).subscribe
      (
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this._router.navigate(['/special']);
        },
        err => console.log(err)
      );
  }

}
