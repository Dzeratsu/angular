import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interface/user";
import {Token} from "../interface/token"
import {Observable, Subject, tap} from "rxjs";
import {Router} from "@angular/router"

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router:Router) {
  }

  url = 'http://localhost:3000'

  registration(user: User):Observable<User> {
    return this.http.post<User>(this.url + '/user/registration', user)
      .pipe()
    tap(() => console.log('reg true'))
    err => console.error(err)
  }

  login(user: User) {
    return this.http.post<Token>(this.url + '/auth/login', user)
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    this.router.navigate(['/login'])
  }

  setToken(token: Token) {
    localStorage.setItem('token', token.access_token)
    localStorage.setItem('user', token.user)
    this.router.navigate(['/dashboard'])
  }
  public get isLogIn(): boolean {
    return (localStorage.getItem('token') !== null)
  }

}

