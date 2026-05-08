import { Component } from '@angular/core';
import { Todos } from './MyComponents/todos/todos';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Todos, RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'first-angular-app';

}
