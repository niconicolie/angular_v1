import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/components/Animals';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  animal?: Animal;

  constructor(private testService: TestService, private route: ActivatedRoute) {
    this.getItem();
  }

  ngOnInit(): void {
    
  }
/* corrigir */
  getItem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.testService.getItem(id).subscribe((animal) => (this.animal = animal));
    console.log();
  }
}
