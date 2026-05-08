import { Component } from '@angular/core';
import { Todos } from './MyComponents/todos/todos';

@Component({
  selector: 'app-root',
  imports: [Todos],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'first-angular-app';

}
