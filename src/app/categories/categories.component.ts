import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CategoriesService } from '../services/categories.service';

import { Category } from '../interfaces/interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Observable<Category[]>

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categories = this.categoriesService.fetch()
  }
}
