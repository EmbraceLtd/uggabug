import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uggabug';

  items: MenuItem[];

  result: string;
  get labelResult(): string {
    return this.result;
  }
  set labelResult(value: string) {
    this.result = value;
  }


  onClick(): void {
    // alert('HEJ A$!');
    this.labelResult = 'HEJ A$!';
  }
}
