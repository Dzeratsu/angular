import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TransportService} from "../service/transport.service";
import { tap, catchError} from 'rxjs/operators'
import {addGroupResp} from "../interface/group";


@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.scss']
})
export class AddgroupComponent implements OnInit {

  constructor(private ts: TransportService) {
  }

  formGroup!: FormGroup
  respInfo!: addGroupResp

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required, Validators.maxLength(100)])
    })
  }
    submitGroup() {
      return this.ts.postAddGroup(this.formGroup.value).subscribe(
        resp => {
          this.respInfo = resp
        }
      )
    }
}
