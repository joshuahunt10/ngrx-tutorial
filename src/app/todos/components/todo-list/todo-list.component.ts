import { Component, Input } from '@angular/core';
import { Todo } from '../../models/todos.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent {
  @Input() todoList: Todo[];
}
