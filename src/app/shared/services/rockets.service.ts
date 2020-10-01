import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RocketsInterface} from '../models/rockets.interface';
import {RocketInterface} from '../models/rocket.interface';

@Injectable({
  providedIn: 'root'
})
export class RocketsService {

  constructor(private http: HttpClient) { }

  getAllRockets(): Observable<any> {
    return this.http.get<RocketsInterface[]>(`https://api.spacexdata.com/v3/rockets`);
  }

  getRocketById(rocket_id: string) {
    return this.http.get<RocketInterface>(`https://api.spacexdata.com/v3/rockets/${rocket_id}`);
  }
}
