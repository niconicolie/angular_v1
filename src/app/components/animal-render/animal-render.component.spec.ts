import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalRenderComponent } from './animal-render.component';

describe('AnimalRenderComponent', () => {
  let component: AnimalRenderComponent;
  let fixture: ComponentFixture<AnimalRenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalRenderComponent]
    });
    fixture = TestBed.createComponent(AnimalRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
