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
    this.ts.getAllGroup()
    this.route.params.subscribe(params => this.urlParam = params['id'])
    this.ts.groupALl.subscribe((resp) => {
      this.groupData = resp.filter(object => object.id == this.urlParam)
      this.formEditGroup = new FormGroup({
        name: new FormControl(this.groupData[0].name, [Validators.required]),
        description: new FormControl(this.groupData[0].description, [Validators.required, Validators.maxLength(100)])
      })
    })
  }

  editGroup() {
    return this.ts.putEditGroup(this.formEditGroup.value, this.groupData[0].id).subscribe(
      resp => {
        console.log(resp)
        this.respInfo = false
        this.message = 'Группа успешно отредактирована'
        this.ts.getAllGroup()
      },
      (error) => this.respInfo = error
    )
  }
}
