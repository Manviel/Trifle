import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Category, Message } from "../interfaces/interface";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient) { }

  fetch(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/category');
  }

  getById(id: string): Observable<Category> {
    return this.http.get<Category>(`/api/category/${id}`);
  }

  create(name: string, image?: File): Observable<Category> {
    const data = new FormData();

    if (image) {
      data.append('image', image, image.name);
    }
    data.append('name', name);

    return this.http.post<Category>('/api/category', data);
  }

  update(id: string, name: string, image?: File): Observable<Category> {
    const data = new FormData();

    if (image) {
      data.append('image', image, image.name);
    }
    data.append('name', name);

    return this.http.patch<Category>(`/api/category/${id}`, data);
  }

  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/category/${id}`);
  }
}