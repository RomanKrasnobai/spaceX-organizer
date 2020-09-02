import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragonsService {

  constructor(private http: HttpClient) { }

  getAllDragons(): Observable<any> {
    return this.http.get(`https://api.spacexdata.com/v3/dragons`);
  }
}
