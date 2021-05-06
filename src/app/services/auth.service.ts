import { UserProfile } from 'src/app/Model/UserProfile';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Model/User';
import { Subject, Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean;
  private user: UserProfile;
  private baseUrl: string;

  constructor(
    private _http: HttpClient,
    private _userService: UserService
  ) { 
    this.isLoggedIn = false;
    this.baseUrl = 'http://localhost:3000';
    this.user = {
      id: '',
      name: '',
      password: '',
      phone: '',
      profession: '',
      interests: [],
      imageUrl: ''
    }
  }

  isAuthenticated(){
    return this.isLoggedIn;
  }

  login(user: User): Observable<boolean>{
    let loggedInSource = new Subject<boolean>();

    this.checkIfUserExists(user).subscribe(res =>{
      if(res != undefined || res != null){
        if(res.password == user.password){
          this.loggedInByCredentials(res);
          loggedInSource.next(true);
        } else{
          loggedInSource.next(false);
        }
      }
    },
    (error) => {
      console.log(error);
      loggedInSource.next(false);
    });
    return loggedInSource.asObservable();
  }

  private checkIfUserExists(user: User){
    console.log('trying to log in!');
    let loginUrl = this.baseUrl+'/users/'+user.email;
    return this._http.get<UserProfile>(loginUrl);
  }

  private loggedInByCredentials(user: UserProfile){
    this.isLoggedIn = true;
    this.user = {
      id: user.id,
      name: user.name,
      password: '',
      phone: user.phone,
      profession: user.profession,
      interests: user.interests,
      imageUrl: user.imageUrl
    };
    console.log('user found!');
    sessionStorage.setItem('user', JSON.stringify(this.user)); 
    this._userService.setUserForApp(this.user);
  }

  //temp method to set bypass the auth guard if the user logged in the from browser through session
  loggedInBySession(user: any){
    console.log('loggedIn by session storage')
    this.isLoggedIn = true;
    this.user = user;
    this._userService.setUserForApp(this.user);
  }

  getLoggedInUser(): string{
    if(this.user.name != '' && this.user.name != null || this.user.name != undefined){
      return this.user.name;
    }
    else{
      return '';
    }
  }

  logout(){
    this.isLoggedIn = false;    
  }
  
}
