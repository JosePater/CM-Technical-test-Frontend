import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = '/api/users/';

  constructor(private http: HttpClient) { }

  // Get users
  getUsers(){
    return this.http.get(this.url + 'all')
  }

  // Get one user
  getUser(id:number) {
    return this.http.get(this.url + id)
  }

  // Add user
  addUser(user:any){ // any porque aún no hay interfez
    return this.http.post(this.url+'add', user);
  }

  // Delete user
  deleteUser(id:number){
    return this.http.delete(this.url+'delete/'+id);
  }

  // Update user
  updateUser(id:number, user:any){  // any porque aún no hay interfez
    return this.http.put(this.url+'update/'+id, user);
  }

}

// --- Interface ---

export interface User {
  _id?: number;
  name?: string,
  last_name?: string,
  pass?: string,
  _date?: Date;
}
