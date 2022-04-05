import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TransportService} from "../service/transport.service";
import {addGroup} from "../interface/formaGroup";

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss']
})
export class EditGroupComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ts: TransportService, private router: Router) {
  }

  formEditGroup!: FormGroup
  respInfo: boolean = false
  message:string = ''
  urlParam!: number
  groupData

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false
    }
    this.route.params.subscribe(params => this.urlParam = params['id'])
    this.formEditGroup = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required, Validators.maxLength(100)])
    })
    this.ts.groupALl.subscribe((resp) => {
      this.groupData = resp.filter(object => object.id == this.urlParam)
      this.addDataForm()
    })
  }

  addDataForm() {
    this.formEditGroup.setValue({name: this.groupData[0].name, description: this.groupData[0].description});
  }
  editGroup() {
    return this.ts.putEditGroup(this.formEditGroup.value, this.groupData[0].id).subscribe(
      resp => {
        console.log(resp)
        this.respInfo = true
        this.message = 'Группа успешно отредактирована'
        this.ts.getAllGroup()
      },
      (error) => this.respInfo = error
    )
  }
}
