import { Component } from '@angular/core';

// html, css, ts are unified by @Component and exposed in a selector
@Component({
  selector: 'app-root', // element selector
  templateUrl: './app.component.html', // html
  styleUrls: ['./app.component.css'] // css
})

// ts
export class AppComponent {
  title = 'phonebook-plus';
}
