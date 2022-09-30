import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'eventbinding';
  names: string[] = ['Fred', 'Julie', 'Sam', 'Olivia', 'Adam', 'Jennifer'];
  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }
  newName = '';
  addName() {
    this.names.push(this.newName);
  }
}
