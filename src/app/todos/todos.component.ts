import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromActions from './actions/todos.actions';
import * as fromReducer from './reducers/todos.reducer';
import * as fromSelectors from './selectors/todos.selectors';
import { Todo } from './models/todos.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.less']
})
export class TodosComponent implements OnInit {
  todoList$: Observable<Todo[]>;

  constructor(
    private store: Store<fromReducer.State>
  ) {}

  ngOnInit() {
    this.store.dispatch(fromActions.loadTodosRequest())
    this.todoList$ = this.store.pipe(select(fromSelectors.selectAllTodosList))
  }

  onSaveTodo(todoText: string) {
    const newTodo: Todo = {text: todoText, complete: false}
    this.store.dispatch(fromActions.createNewTodoRequest({ todo: newTodo }))
  }
}
