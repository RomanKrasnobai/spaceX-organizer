import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapsulesService {
  url = `https://api.spacexdata.com/v3/capsules`;

  constructor(private http: HttpClient) { }

  getAllCapsules(serial?: string): Observable<any> {
    if (serial) {
      return this.http.get(this.url, {params: { capsule_serial: serial }});
    } else {
      return this.http.get(this.url);
    }
  }

  getCapsulesByStatus(status: string): Observable<any> {
    return this.http.get(this.url, { params: {status} });
  }
}
