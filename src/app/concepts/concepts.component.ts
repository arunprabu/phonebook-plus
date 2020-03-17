import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
// ts
export class ConceptsComponent implements OnInit {
  // variables
  // public variables, and private variables can be here
  // string interpolation related
  appName = 'Phone Book Plus';
  devDurationInMonths = 4;
  skillsList: string[] = [
    'html', 'css', 'ts', 'js', 'ng'
  ];

  // property binding
  averageExp = 4;
  isLoggedIn = true;

  // two way binding
  course = 'Angular';

  
  constructor() { }

  ngOnInit() {
  }

  // string interpolation related
  getAppName() {
    return this.appName;
  }

  // event binding related
  clickMeHandler(e) {
    console.log(e);
    alert('clicked');
  }

  // custom event handler
  profileLoadedHandler(e) {
    console.log(e);
    alert(e);
  }
}
