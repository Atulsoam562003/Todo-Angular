import { Component ,Output , EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-add',
  imports: [FormsModule],
  templateUrl: './todo-add.html',
  styleUrl: './todo-add.scss',
})
export class TodoAdd {
  title : string = '';
  desc : string = '';
  @Output() todoAdd = new EventEmitter<Todo>();

  onSubmit() {
    const todo = {
      sno : Date.now(),
      title: this.title,
      desc: this.desc ,
      active : true
    }
    this.todoAdd.emit(todo);
  }
}
