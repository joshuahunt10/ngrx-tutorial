import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as TodoAction from './actions/todos.actions';
import * as fromReducer from './reducers/todos.reducer';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.less']
})
export class TodosComponent implements OnInit {

  constructor(
    private store: Store<fromReducer.State>
  ) {}

  ngOnInit() {
    this.store.dispatch(TodoAction.createNewTodo({todo: {
      text: 'Add more todos',
      complete: true
    }}))
  }

}
