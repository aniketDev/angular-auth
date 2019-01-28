import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { EventService } from '../event.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {};
  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  registerUser() {
    this.eventService.registerUser(this.registerUserData).subscribe
      (
        res => console.log(res),
        err => console.log(err)
      );
  }

}
