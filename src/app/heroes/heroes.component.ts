import { Component, OnInit } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Spiderman'
  };

  constructor() { }

  ngOnInit() {
  }

}
