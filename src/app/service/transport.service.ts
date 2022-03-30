import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap, Subject, BehaviorSubject} from "rxjs";
import {addGroupResp, allTransport, transportGroup} from "../interface/group";
import {addGroup} from "../interface/formaGroup";
import {Transport} from "../interface/transport";

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  groupALl = new BehaviorSubject<transportGroup[]>([])
  allTransportSubj = new BehaviorSubject<allTransport[]>([])

  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000'

  getAllGroup(){
    return this.http.get<transportGroup[]>(this.url + '/tsgroup/all').subscribe((resp) => this.groupALl.next(resp))
  }

  getAllTransport() {
    return this.http.get<allTransport[]>(this.url + '/transport').subscribe((resp) => this.allTransportSubj.next(resp))
  }

  postAddGroup(object: addGroup): Observable<addGroupResp> {
    return this.http.post<addGroupResp>(this.url + '/tsgroup/add', object)
      .pipe()
    tap(() => console.log('group add')),
      err => console.error(err)
  }

  postAddTs(object: Transport): Observable<Transport>{
     return this.http.post<Transport>(this.url + '/transport/add', object)
  }

  delGroup(id: number) {
    return this.http.delete(this.url + `/tsgroup/del/${id}`)
  }
}
