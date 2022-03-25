import { Component, OnInit, Input } from '@angular/core';
import {transportGroup} from "../interface/group";

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss']
})
export class TableItemComponent implements OnInit {

  @Input() oneTs!: transportGroup
  constructor() { }

  ngOnInit(): void {
  }

}
