import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { CategoriesService } from '../../services/categories.service';

import { Category } from '../../interfaces/interface';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	@ViewChild('input') inputRef: ElementRef

	form: FormGroup
	image: File
	category: Category
	isNew = true
	preview = ''

	constructor(
		private route: ActivatedRoute,
		private router: Router,
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
		).subscribe((category: Category) => {
			if (category) {
				this.category = category;

				this.form.patchValue({
					name: category.name
				});

				this.preview = category.image;
			}

			this.form.enable();
		},
			err => this.snackBar.open(err.error.message, 'error', { duration: 2000 })
		)
	}

	triggerInput() {
		this.inputRef.nativeElement.click()
	}

	fileUpload(event: any) {
		const file = event.target.files[0];

		this.image = file;

		const reader = new FileReader();

		reader.onload = () => {
			this.preview = reader.result;
		}

		reader.readAsDataURL(file);
	}

	deleteCategory() {
		const decision = window.confirm(`Are you sure, you want to delete ${this.category.name}?`);

		if (decision) {
			this.categories.delete(this.category._id).subscribe(
				response => this.snackBar.open(response.message, 'response', { duration: 2000 }),
				err => this.snackBar.open(err.error.message, 'error', { duration: 2000 }),
				() => this.router.navigate(['/categories'])
			);
		}
	}

	onSubmit() {
		let obs;

		this.form.disable();

		if (this.isNew) {
			obs = this.categories.create(this.form.value.name, this.image);
		} else {
			obs = this.categories.update(this.category._id, this.form.value.name, this.image);
		}

		obs.subscribe(category => {
			this.category = category;

			this.snackBar.open('Changes saved', 'success', { duration: 2000 });

			this.form.enable();
		},
			error => {
				this.snackBar.open(error.error.message, 'error', { duration: 2000 });

				this.form.enable();
			});
	}
}
