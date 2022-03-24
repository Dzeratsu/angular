import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {addGroupResp, transportGroup} from "../interface/group";
import {addGroup} from "../interface/formaGroup";

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor(private http: HttpClient) {
  }

  url = 'http://localhost:3000'
  getAllGroup(): Observable<transportGroup[]> {
    return this.http.get<transportGroup[]>(this.url + '/tsgroup/all')
  }
  postAddGroup(object: addGroup):Observable<addGroupResp> {
    return this.http.post<addGroupResp>(this.url +  '/tsgroup/add', object)
      .pipe()
    tap(()=> console.log('group add')),
      err => console.error(err)
  }
}
