import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import * as TodoAction from './actions/todos.actions';
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
    // this.store.dispatch(TodoAction.createNewTodo({todo: {
    //   id: 3,
    //   text: 'Add a template',
    //   complete: true
    // }}))
    // this.todoList$ = this.store.pipe(
    //   select(fromSelectors.selectAllTodos),
    //   map(todosMap => Object.values(todosMap)),
    //   tap(console.log)
    // );
    this.store.dispatch(TodoAction.loadTodos())
  }

  onSaveTodo(todoText: string) {
    console.log('todo saved', todoText)
  }

}
