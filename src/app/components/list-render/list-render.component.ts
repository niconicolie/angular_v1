import { Component, OnInit } from '@angular/core';
import { Animal } from '../Animals';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: "Meg", type: "Dog", age: 6 },
    { name: "Totê", type: "Cat", age: 8 }
  ];

  animalDetails = ""

  constructor() {

  }

  ngOnInit(): void {
    
  }

  showAge(animal: Animal) {
  this.animalDetails = `${animal.name} is ${animal.age} years old`;
  }
}
