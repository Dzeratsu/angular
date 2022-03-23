import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  constructor(private user: UserService) {}

  formReg: FormGroup

  ngOnInit() {
    this.formReg = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  reg(){
    this.user.registration(this.formReg.value)
  }
}
