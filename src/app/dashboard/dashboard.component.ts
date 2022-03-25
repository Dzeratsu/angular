import {Component, OnInit, ViewChild} from '@angular/core';
import {allTransport, transportGroup} from "../interface/group";
import {TransportService} from "../service/transport.service";
import {AddgroupComponent} from "../addgroup/addgroup.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tsGroup: transportGroup[] = []
  transport: allTransport[]  = []

  constructor(private ts: TransportService) {}

  ngOnInit(): void {
    this.getGroup()
    this.getTransport()
  }

  getGroup(): void{
    this.ts.getAllGroup()
      .subscribe( tsGroup => this.tsGroup = tsGroup)
  }
  getTransport(): void{
     this.ts.getAllTransport()
      .subscribe(allTs => this.transport = allTs)
  }
   transportFiltered(id: number): allTransport[]{
     return this.transport.filter(object => object.unitID?.includes(id))

    }
}
