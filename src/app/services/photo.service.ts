import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiRoot = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) {
  }

  getPhotos(): Observable<Photo[]> {
    console.log("getPhotos");
    return this.http.get<Photo[]>(`${this.apiRoot}/photos`);
  }

  likePhoto(id: string): Observable<Photo> {
    return this.http.put<Photo>(`${this.apiRoot}/photos/${id}/like`, null);
  }

  dislikePhoto(id: string): Observable<Photo> {
    return this.http.put<Photo>(`${this.apiRoot}/photos/${id}/dislike`, null);
  }
}
