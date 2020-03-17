import { Component, OnInit } from '@angular/core';

// Decorator
@Component({
  selector: 'app-header', // element selector  -- mandatory
  templateUrl: './header.component.html',  // html  -- mandatory -- only one
  styleUrls: ['./header.component.css'] // css  -- can be multiple -- and optional
})
// ts
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
