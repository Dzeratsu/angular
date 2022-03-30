import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Token} from "../interface/token"

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private user: UserService) {
  }

  formLogin!: FormGroup
  error

  ngOnInit() {
    this.formLogin = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  submitLogin() {
    return this.user.login(this.formLogin.value).subscribe(
      (resp: Token) => {
        this.user.setToken(resp)
      },
      (err) => this.error = err.error.message
  )
  }

}
