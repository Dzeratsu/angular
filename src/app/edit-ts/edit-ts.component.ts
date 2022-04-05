import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TransportService} from "../service/transport.service";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from 'rxjs/operators'
import {Observable} from "rxjs";
import {Transport} from "../interface/transport";

@Component({
  selector: 'app-edit-ts',
  templateUrl: './edit-ts.component.html',
  styleUrls: ['./edit-ts.component.scss']
})
export class EditTsComponent implements OnInit {

  constructor(private ts: TransportService, private router: Router, private route: ActivatedRoute) {
  }

  formEditTs!: FormGroup
  urlParam!: number
  oneTs
  allGroup
  respInfo

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false
    }
    this.route.params.subscribe(params => this.urlParam = params['id'])
    this.ts.getOneTransport(this.urlParam).subscribe((resp) => {
      this.oneTs = resp
      this.addDataForm()
    })
    this.formEditTs = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      unitID: new FormControl(null)
    })
    this.ts.groupALl.subscribe((resp) => {
      this.allGroup = resp
      this.addCheck()
    })
    if (this.allGroup == []) {
      this.ts.getAllGroup()
    }
  }

  addCheck() {
    this.allGroup.map(value => {
      return value.check = value.unitID.includes(Number(this.urlParam))
    })
  }

  changeGroup(i: number) {
    this.allGroup[i].check = !this.allGroup[i].check
  }

  addDataForm() {
    {
      this.formEditTs.setValue({name: this.oneTs.name, description: this.oneTs.description, unitID: []});
    }
  }

  editTs() {
    this.formEditTs.value.unitID = this.createArray()
    return this.ts.putEditTS(this.formEditTs.value, this.oneTs.id).subscribe(
      resp => {
        this.respInfo = resp
        setTimeout(() => {
          this.respInfo = false
        }, 2500)
        this.ts.getAllTransport()
        this.ts.getAllGroup()
      })
  }

  deleteTs(id: number) {
    return this.ts.delTs(id)
  }

  createArray(): number[] {
    let arr: number[] = []
    for (let i: number = 0; i < this.allGroup.length; i++) {
      if (this.allGroup[i].check == true) {
        arr.push(this.allGroup[i].id)
      }
    }
    return arr
  }
}
