import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DragonsInterface} from '../models/dragons.interface';

@Injectable({
  providedIn: 'root'
})
export class DragonsService {

  constructor(private http: HttpClient) { }

  getAllDragons(): Observable<any> {
    return this.http.get<DragonsInterface[]>(`https://api.spacexdata.com/v3/dragons`);
  }
}
