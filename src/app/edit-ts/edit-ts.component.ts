import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TransportService} from "../service/transport.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-ts',
  templateUrl: './edit-ts.component.html',
  styleUrls: ['./edit-ts.component.scss']
})
export class EditTsComponent implements OnInit {

  constructor(private ts: TransportService, private router: Router, private route: ActivatedRoute) {
  }

  formEditTs!: FormGroup
  respInfo!: boolean
  urlParam!: number
  tsData
  groupALl
  defCheck!: boolean

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false
    }
    this.route.snapshot.queryParams['id']
    this.route.params.subscribe(params => this.urlParam = params['id'])
    this.ts.groupALl.subscribe((resp) => {
      this.groupALl = resp
    })
    this.ts.allTransportSubj.subscribe((resp) => {
      this.tsData = resp.filter(object => object.id == this.urlParam)
      this.formEditTs = new FormGroup({
        name: new FormControl(this.tsData[0].name, [Validators.required]),
        description: new FormControl(this.tsData[0].description, [Validators.required, Validators.maxLength(100)])
      })
      this.testCheck()
    })
  }

  changeGroup(i: number) {
    this.groupALl[i].check = !this.groupALl[i].check
  }

  editTs() {
    return
  }

  testCheck(): void {
    let tsArr = this.tsData[0].unitID
    for (let i: number = 0; i < tsArr.length; i++) {
      for (let j: number = 0; j < this.groupALl.length; j++) {
        if (this.groupALl[j].id == tsArr[i]) {
          this.groupALl[j].check = true
        }
      }
    }
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
