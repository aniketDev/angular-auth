import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _eventService: EventService, private _router: Router) { }

  canActivate(): boolean {
    if (this._eventService.loggedIn()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
