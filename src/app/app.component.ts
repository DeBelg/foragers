import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Foragers Devconnect';
  items = ['Minimum Valid Whitepaper'];
  expandedIndex = 0;
}
