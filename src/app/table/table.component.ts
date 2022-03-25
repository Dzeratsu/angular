import { Component, OnInit, Input } from '@angular/core';
import {TransportService} from "../service/transport.service";
import {allTransport, transportGroup} from "../interface/group";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tsGroup!: transportGroup
  name!: string
  description!: string
  unitID!: number[]

  @Input() allTsGroup: allTransport[] = []

  hide: boolean = false
  constructor() {}

  ngOnInit(): void {
  }

    openList(): void {
    this.hide = !this.hide
    }
}
