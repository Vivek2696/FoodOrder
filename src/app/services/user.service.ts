import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProfile } from '../Model/UserProfile';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string;
  private loggedInUser: UserProfile | undefined;

  constructor(
    private _http: HttpClient
  ) { 
    this.baseUrl = 'http://localhost:3000'
  }

  addNewUser(user: UserProfile){
    let url = this.baseUrl+'/users'
    return this._http.post<UserProfile[]>(url,user);
  }

  setUserForApp(user: UserProfile){
    this.loggedInUser = {
      id : user.id,
      name: user.name,
      password: '',
      phone: user.phone,
      profession: user.profession,
      interests: user.interests,
      imageUrl: user.imageUrl
    }
  }

  getCurrentUser(){
    return this.loggedInUser;
  }

}
