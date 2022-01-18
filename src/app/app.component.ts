import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';

  changeInput(event: any) {
    this.username = event.target.value;
  }

  handleButtonClick() {
    this.username = '';
  }
}
