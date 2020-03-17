import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  // inline template -- mandatory
  template: `
    <div class='text-center'>
      <hr>
      <app-menu>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to top</a>
        </li>
      </app-menu>
      <p class="redText">Copyright 2020 - Haxaware</p>
      <p class="greenText">Made in an ng8 Training</p>
    </div>
  `,
  // optional -- can also be of inline
  styles: [
    `
      .greenText{
        color: green;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
