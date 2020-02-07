import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Todo } from './todos/models/todos.model';
import { Contact } from './phone-book/models/phone-book.model';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos: Todo[] = [
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
    const phonebook: Contact[] = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Smith',
        number: 2815558989
      }
    ]
    return {todos, phonebook};
  }
}
