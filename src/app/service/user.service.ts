import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interface/user";
import {Token} from "../interface/token"
import {Observable} from "rxjs";
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

  registration(user: User) {
    this.http.post(this.url + '/user/registration', user).subscribe(
      (resp)=>{
        this.router.navigate(['/login'])
      }
    )
  }

  login(user: User) {
    return this.http.post<Token>(this.url + '/auth/login', user).subscribe(
      (resp: Token) => {
        this.router.navigate(['dashboard'])
        this.setToken(resp)
      }
    )
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

  setToken(token: Token) {
    localStorage.setItem('token', token.access_token)
  }
  public get isLogIn(): boolean {
    return (localStorage.getItem('token') !== null)
  }
}

