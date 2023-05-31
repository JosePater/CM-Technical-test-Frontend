import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = '/api/users/all';

  constructor(private http: HttpClient) { }

  // Get users
  getUsers(){
    return this.http.get(this.url)
  }
}
