import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {InfoInterface} from '../models/about.interface';

@Injectable({
    providedIn: 'root'
  })
export class InfoService {
  constructor(private http: HttpClient) { }

  getInfo(): Observable<InfoInterface> {
    return this.http.get<InfoInterface>(`https://api.spacexdata.com/v3/info`);
  }
}
