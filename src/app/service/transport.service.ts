import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {transportGroup} from "../interface/group";

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
}
