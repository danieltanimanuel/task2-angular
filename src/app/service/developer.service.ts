import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Developer } from '../model/developer';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  developers: Developer[] = [];

  private url: string = 'http://localhost:3005/freelancers'

  constructor(private http: HttpClient) { }

  getAllDeveloper(): Observable<Developer[]>{
    return this.http.get<Developer[]>(this.url);
  }

  getDeveloper(id: number): Observable<Developer>{
    return this.http.get<Developer>(`${this.url}/${id}`)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  addDeveloper(developer: Developer): Observable<Developer>{
    return this.http.post<Developer>(this.url, developer);
  }

  deleteDeveloper(id: number): Observable<Developer>{
    return this.http.delete<Developer>(`${this.url}/${id}`)
  }

  updateDeveloper(developer: Developer): Observable<Developer>{
    return this.http.put<Developer>(`${this.url}/${developer.id}` , developer);
  }
}
