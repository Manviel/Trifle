import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Position, Message } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  constructor(private http: HttpClient) { }

  fetch(categoryId: string): Observable<Position[]> {
    return this.http.get<Position[]>(`/api/position/${categoryId}`);
  }

  create(position: Position): Observable<Position> {
    return this.http.post<Position>('/api/position', position);
  }

  delete(position: Position): Observable<Message> {
    return this.http.delete<Message>(`/api/position/${position._id}`);
  }
}