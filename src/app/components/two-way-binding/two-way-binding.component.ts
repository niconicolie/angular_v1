import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  name: string = ''; // exibidr o conteúdo de um input
  age: string = '';

  constructor ()  {}

  ngOnInit(): void {
    
  }

}
