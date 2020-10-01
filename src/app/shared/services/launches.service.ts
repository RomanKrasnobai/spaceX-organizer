import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {

  constructor(private http: HttpClient) { }

  getLaunches(): Observable<any> {
    return this.http.get(`https://api.spacexdata.com/v3/launches`);
  }
}
