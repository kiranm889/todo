import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username: any, password: any) {
    if (username == 'kiran1' && password == 'dummy') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user == null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
