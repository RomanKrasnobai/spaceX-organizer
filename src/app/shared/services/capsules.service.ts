import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapsulesService {

  constructor(private http: HttpClient) { }

  getAllCapsules(serial?: string): Observable<any> {
    const url = `https://api.spacexdata.com/v3/capsules`;

    if (serial) {
      return this.http.get(url,
        {params: { capsule_serial: serial }}
      );
    } else {
      return this.http.get(url);
    }
  }
}
