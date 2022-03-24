import { Component, OnInit } from '@angular/core';
import {transportGroup} from "../interface/group";
import {TransportService} from "../service/transport.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tsGroup: transportGroup[] = []

  constructor(private ts: TransportService) {}

  ngOnInit(): void {
    this.getGroup()
  }

  getGroup(): void{
    this.ts.getAllGroup()
      .subscribe( tsGroup => this.tsGroup = tsGroup)
  }
}
