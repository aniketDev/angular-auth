import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private BaseUrl = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }

  registerUser(user: object) {
    return this.httpClient.post(this.BaseUrl + 'api/register', user);
  }

  loginUser(user) {
    return this.httpClient.post(this.BaseUrl + 'api/login', user);
  }
}
