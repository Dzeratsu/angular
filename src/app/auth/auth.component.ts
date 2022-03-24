import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private user: UserService) {}

  formLogin!: FormGroup

  ngOnInit() {
    this.formLogin = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  submitLogin(): void{
    this.user.login(this.formLogin.value)
  }

}
