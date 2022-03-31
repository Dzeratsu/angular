import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {addGroupResp} from "../interface/group";
import {TransportService} from "../service/transport.service";
import {Transport} from "../interface/transport";

@Component({
  selector: 'app-add-ts',
  templateUrl: './add-ts.component.html',
  styleUrls: ['./add-ts.component.scss']
})
export class AddTsComponent implements OnInit {

  constructor(private ts: TransportService) {
  }

  formGroup!: FormGroup
  respInfo!: any | false
  groupALl
  clearCheck: boolean = false

  ngOnInit(): void {
    this.ts.groupALl.subscribe((resp) => this.groupALl = resp)
    this.formGroup = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      unitID: new FormControl([])
    })
  }

  submitTs() {
    this.formGroup.value.unitID = this.createArray()
    return this.ts.postAddTs(this.formGroup.value).subscribe(
      resp => {
        this.respInfo = resp
        setTimeout(() => {
          this.respInfo = false
        }, 2500)
        this.clearCheck = false
        this.ts.getAllTransport()
        this.formGroup.reset()
      }
    )
  }

  changeGroup(i: number) {
    this.groupALl[i].check = !this.groupALl[i].check
  }

  createArray(): number[] {
    let arr: number[] = []
    for (let i: number = 0; i < this.groupALl.length; i++) {
      if (this.groupALl[i].check == true) {
        arr.push(this.groupALl[i].id)
      }
    }
    return arr
  }
}

