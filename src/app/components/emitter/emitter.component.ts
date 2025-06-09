import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {
  myValue: boolean = false;
  constructor() {}

  ngOnInit(): void {
    
  }

  onChangeBoolean() {
    this.myValue = true;
  }

}
