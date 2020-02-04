import { Injectable } from '@angular/core';
import { Todo } from '../models/todos.model';
import { MOCKTODOS } from './mock-todos';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosUrl = 'api/todos'

  constructor(
    private http: HttpClient
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl)
  }
}
