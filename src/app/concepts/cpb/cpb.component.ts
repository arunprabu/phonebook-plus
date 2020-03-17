import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {

  // declare a variable
  // and make it a custom property
  @Input() age = 20;  // age will be a custom property

  constructor() { }

  ngOnInit() {
  }

}
