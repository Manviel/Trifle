import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {
  categories: any[]

  constructor(private categoriService: CategoriesService) { }

  ngOnInit() {
    this.categoriService.fetch().subscribe(res => {
      this.categories = res;
    });
  }
}
