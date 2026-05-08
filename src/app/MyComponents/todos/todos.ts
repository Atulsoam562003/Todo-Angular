import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItem } from "../todo-item/todo-item";
import { TodoAdd } from "../todo-add/todo-add";

@Component({
  selector: 'app-todos',
  imports: [NgFor, TodoItem, TodoAdd, NgIf],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos {
  localItem: string | null;
  todos: Todo[];
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }
  }
  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.sno !== todo.sno);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  todoAdd(todo: Todo) {
    this.todos = [...this.todos, todo];
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(todo: Todo) {
    const index = this.todos.findIndex(t => t.sno === todo.sno);
    if (index !== -1) {
      this.todos[index].active = todo.active;
    }
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
