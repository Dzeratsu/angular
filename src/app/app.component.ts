import {Component, OnInit} from '@angular/core';
import {UserService} from "./service/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {
  }
  title = 'angular';


  ngOnInit(): void {
  }
  exit() {
     this.userService.logout()
  }
}
