import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todos.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      {
        id: 1,
        text: 'Work on demo',
        complete: false
      },
      {
        id: 2,
        text: 'Add more todos',
        complete: true
      }
    ];
    return {todos};
  }

  // Overrides the genId method to ensure that a todo always has an id.
  // If the todos array is empty,
  // the method below returns the initial number (2).
  // if the heroes array is not empty, the method below returns the highest
  // todo id + 1.
  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 2;
  }
}
