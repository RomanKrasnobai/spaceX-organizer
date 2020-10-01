import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AboutInterface} from '../models/about.interface';

@Injectable({
    providedIn: 'root'
  })
export class InfoService {
  constructor(private http: HttpClient) { }

  getInfo(): Observable<any> {
    return this.http.get<AboutInterface>(`https://api.spacexdata.com/v3/info`);
  }
}
