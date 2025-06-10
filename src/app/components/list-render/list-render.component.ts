import { Component, OnInit } from '@angular/core';
import { Animal } from '../Animals';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animalDetails = '';

  constructor(private testService: TestService) {
    this.getAnimals();
  }

  ngOnInit(): void {
    
  }

  showAge(animal: Animal) {
  this.animalDetails = `${animal.name} is ${animal.age} years old`;
  }

  removeAnimal(animal: Animal) {
    console.log('Removing animal...');
    this.animals = this.testService.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.testService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
