import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  imports: [NgClass],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  @Input({ required: true }) todo!: Todo;
  @Output() todoDelete = new EventEmitter<Todo>();
  @Output() todoChecked = new EventEmitter<Todo>();
  deleteTodo(todo: Todo) {
    this.todoDelete.emit(todo);
  }
  onChecking(todo: Todo) {
    todo.active = !todo.active;
    this.todoChecked.emit(todo);
  }
}
