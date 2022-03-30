import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {addGroupResp} from "../interface/group";
import {ActivatedRoute} from "@angular/router";
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {addGroup} from "../interface/formaGroup";
import {TransportService} from "../service/transport.service";

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss']
})
export class EditGroupComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private ts: TransportService) { }

  formGroup!: FormGroup
  respInfo!: addGroupResp | false
  urlParam!: number
  groupData

  ngOnInit(): void {
    this.ts.getAllGroup()
    this.route.params.subscribe(params => this.urlParam = params['id'])
    this.ts.groupALl.subscribe((resp) => this.groupData = resp.filter(object => object.id == this.urlParam))
    console.log(this.groupData)
    this.formGroup = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(this.groupData.description, [Validators.required, Validators.maxLength(100)])
    })
  }
  ngOnDestroy():void{
    this.urlParam = NaN
    this.groupData = []
    this.formGroup.reset()
  }

  editGroup(){
    return
  }
}
