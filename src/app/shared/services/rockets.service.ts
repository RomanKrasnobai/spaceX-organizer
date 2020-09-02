import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RocketsService {

  constructor(private http: HttpClient) { }

  getAllRockets(): Observable<any> {
    return this.http.get<any>(`https://api.spacexdata.com/v3/rockets`);
  }
}
