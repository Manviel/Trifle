import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../services/categories.service';

import { Category } from '../interfaces/interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  loading = false
  categories: Category[] = []

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.loading = true;

    this.categoriesService.fetch().subscribe(item => {
      this.loading = false;
      this.categories = item;

      console.log(item);
    });
  }
}
