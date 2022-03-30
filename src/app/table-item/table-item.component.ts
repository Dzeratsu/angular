import { Component, OnInit, Input } from '@angular/core';
import {allTransport, transportGroup} from "../interface/group";

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss']
})
export class TableItemComponent implements OnInit {

  @Input()
  oneTs
  maskDate

  constructor() { }

  ngOnInit(): void {
    this.maskDate = this.timeMask()
  }
  timeMask(){
    const date = new Date(this.oneTs.createdAt)
    function mask (a){
      if(a < 10){
        return '0' + (a + 1)
      }else {
        return a + 1
      }
    }
    const time = mask(date.getDate()) + ":" + mask(date.getMonth()) + ":" + date.getFullYear()
    return time
  }
}
