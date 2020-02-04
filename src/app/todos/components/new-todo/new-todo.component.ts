import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-todo',
  templateUrl: './new-todo.component.html',
  styles: []
})
export class AddTodoComponent implements OnInit {
  @Output() saveTodo = new EventEmitter();
  inputField: FormControl;

  ngOnInit(): void {
    this.inputField = new FormControl('', [Validators.required])
  }

  addTodo() {
    if(this.inputField.valid) {
      const input = this.inputField.value;
      this.inputField.setValue('', { emitEvent: false });
      this.saveTodo.emit(input);
    }
  }

}
