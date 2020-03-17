import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {

  // Step1: Create a variable and make it custom event
  @Output() profileLoaded = new EventEmitter(); // @Output() will make it custom event

  constructor() {
    console.log('inside constructor');
  }

  ngOnInit() {
    console.log('inside ngOnInit');
    // Step2: emit the event thru pgm
    this.profileLoaded.emit('Arun');  // Step 3: send data when emitting
  }

}
