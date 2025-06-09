import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  count = 0;

  constructor() {}

  ngOnInit(): void {
    
  }

  Add() {
    this.count = this.count + 1;
  }

  Decrease() {
    this.count = this.count - 1;
  }
}
