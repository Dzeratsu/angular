import { Component, OnInit } from '@angular/core';
import {TransportService} from "../service/transport.service";
import {transportGroup} from "../interface/group";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
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
