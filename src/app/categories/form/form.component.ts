import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { CategoriesService } from '../../services/categories.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	form: FormGroup
	isNew = true

	constructor(
		private route: ActivatedRoute,
		private categories: CategoriesService,
		public snackBar: MatSnackBar
	) { }

	ngOnInit() {
		this.form = new FormGroup({
			name: new FormControl(null, Validators.required)
		});

		this.route.params.pipe(
			switchMap((params: Params) => {
				if (params['id']) {
					this.isNew = false;

					return this.categories.getById(params['id']);
				}

				return of(null);
			})
		).subscribe(category => {
			if (category) {
				this.form.patchValue({
					name: category.name
				})
			}

			this.form.enable();
		},
			err => this.snackBar.open(err.error.message)
		)
	}

	onSubmit() { }
}
