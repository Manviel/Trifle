import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any[]

  constructor(private categoriService: CategoriesService) { }

  ngOnInit() {
    this.categoriService.fetch().subscribe(res => {
      this.categories = res;
    });
  }
}
