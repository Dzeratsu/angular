import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap, Subject, BehaviorSubject} from "rxjs";
import {addGroupResp, allTransport, transportGroup} from "../interface/group";
import {addGroup} from "../interface/formaGroup";
import {Transport} from "../interface/transport";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  groupALl = new BehaviorSubject<transportGroup[]>([])
  allTransportSubj = new BehaviorSubject<allTransport[]>([])

  constructor(private http: HttpClient, private router: Router) {
  }

  url = 'http://localhost:3000'

  getAllGroup() {
    return this.http.get<transportGroup[]>(this.url + '/tsgroup/all').subscribe((resp) => this.groupALl.next(resp))
  }

  getAllTransport() {
    return this.http.get<allTransport[]>(this.url + '/transport').subscribe((resp) => this.allTransportSubj.next(resp))
  }

  getOneTransport(id: number) {
    return this.http.get(this.url + `/transport/${id}`)
  }

  postAddGroup(object: addGroup): Observable<addGroupResp> {
    return this.http.post<addGroupResp>(this.url + '/tsgroup/add', object)
      .pipe()
    tap(() => console.log('group add')),
      err => console.error(err)
  }

  putEditGroup(object: addGroup, id: number): Observable<addGroup> {
    return this.http.put<addGroup>(this.url + `/tsgroup/edit/${id}`, object).pipe()
    tap(() => console.log('group edit')),
      err => console.error(err)
  }

  postAddTs(object: Transport): Observable<Transport> {
    return this.http.post<Transport>(this.url + '/transport/add', object)
  }

  putEditTS(object: Transport, id: number): Observable<Transport> {
    return this.http.put<Transport>(this.url + `/transport/edit/${id}`, object).pipe()
    tap(() => console.log('transport edit')),
      err => console.error(err)
  }

  delGroup(id: number, arr: number[]) {
    return this.http.delete(this.url + `/tsgroup/del/${id}`).subscribe(() => {
      if (arr !== []) {
        this.detGroupTs(id, arr)
      }
    })
  }

  detGroupTs(id: number, tsID: number[]) {
    return this.http.post(this.url + `/transport/delGroup/${id}`, tsID)
      .subscribe(() => this.getAllGroup())
    err => console.error(err)
  }

  delTs(id: number) {
    return this.http.delete(this.url + `/transport/del/${id}`)
      .subscribe(() => {
        this.getAllTransport()
        this.router.navigate(['/dashboard'])
      })
    err => console.error(err)
  }
}
