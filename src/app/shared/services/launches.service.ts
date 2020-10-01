import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LaunchesInterface} from '../models/launches.interface';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {

  constructor(private http: HttpClient) { }

  getLaunches(): Observable<any> {
    return this.http.get<LaunchesInterface[]>(`https://api.spacexdata.com/v3/launches`);
  }

  getOneLaunch(flight_number): Observable<any> {
    return this.http.get(`https://api.spacexdata.com/v3/launches/{{${flight_number}}`);
  }

  getUpcomingLaunches(): Observable<any> {
    return this.http.get(`https://api.spacexdata.com/v3/launches/upcoming`);
  }

  getLatestLaunch() {
    return this.http.get(`https://api.spacexdata.com/v3/launches/latest`);
  }

  getNextLaunch() {
    return this.http.get(`https://api.spacexdata.com/v3/launches/next`);
  }
}
