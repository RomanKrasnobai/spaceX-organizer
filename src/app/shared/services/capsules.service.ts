import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CapsulesInterface} from '../models/capsules.interface';

@Injectable({
  providedIn: 'root'
})
export class CapsulesService {
  url = `https://api.spacexdata.com/v3/capsules`;

  constructor(private http: HttpClient) { }

  getAllCapsules(serial?: string): Observable<any> {
    if (serial) {
      return this.http.get<CapsulesInterface[]>(this.url, {params: { capsule_serial: serial }});
    } else {
      return this.http.get<CapsulesInterface[]>(this.url);
    }
  }

  getCapsulesByStatus(status: string): Observable<any> {
    return this.http.get<CapsulesInterface[]>(this.url, { params: {status} });
  }
}
