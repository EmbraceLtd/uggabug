import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uggabug';


  namn: string;
  get name(): string {
    return this.namn;
  }
  set name(value: string) {
    this.namn = value;
  }

  onClick(): void {
    alert('HEJ A$!');
  }
}
