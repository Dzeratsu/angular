import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {allTransport, transportGroup} from "../interface/group";
import {TransportService} from "../service/transport.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tsGroup: transportGroup[] = []
  transport: allTransport[] = []
  hide: boolean = false

  constructor(private ts: TransportService) {
  }

  ngOnInit(): void {
    this.ts.groupALl.subscribe((resp) => this.tsGroup = resp)
    this.ts.allTransportSubj.subscribe((resp) => this.transport = resp)
    this.ts.getAllGroup()
    this.ts.getAllTransport()
    this.transportNoGroup()
  }

  openList(): void {
    this.hide = !this.hide
  }

  transportFiltered(id: number): allTransport[] {
    return this.transport.filter(object => object.unitID?.includes(id))
  }

  transportNoGroup(): allTransport[] {
    return this.transport.filter(object => object.unitID?.length == 0)
  }
}
