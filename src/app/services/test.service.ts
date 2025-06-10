import { Injectable } from '@angular/core';
import { Animal } from '../components/Animals';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor () {}

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name);
  }
}
