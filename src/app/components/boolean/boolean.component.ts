import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.css']
})
export class BooleanComponent implements OnInit {
  @Output() changeValue: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.changeValue.emit();
  }

}
