import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Task } from 'src/model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskTrackerClientService {

  private url: string = 'https://localhost:7178/TaskTracker'

  constructor(private http: HttpClient) { }

  saveTask(task: Task): Observable<Task> {
    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify(task);
    return this.http.post<Task>(this.url, body, { 'headers': headers })
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(() => err.error.errorMessage);
  }  
}
