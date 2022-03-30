import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router"

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  constructor(private user: UserService, private router: Router) {}

  formReg!: FormGroup
  err!: ''

  ngOnInit() {
    this.formReg = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  reg(){
    return this.user.registration(this.formReg.value).subscribe(
      ()=> {
        this.router.navigate(['/login'])
      },
      (er => this.err = er.error.message)
    )
  }
}
