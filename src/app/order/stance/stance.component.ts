import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PositionsService } from '../../services/positions.service';
import { OrderService } from '../../services/order.service';

import { Position } from '../../interfaces/interface';

@Component({
	selector: 'app-stance',
	templateUrl: './stance.component.html',
	styleUrls: ['./stance.component.css']
})
export class StanceComponent implements OnInit {
	stream: any[]

	constructor(
		private route: ActivatedRoute,
		private positionService: PositionsService,
		private orderService: OrderService,
		public snackBar: MatSnackBar
	) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.positionService.fetch(params['id']).subscribe(res => {
				this.stream = res;
			});
		});
	}

	addToOrder(position: Position) {
		this.snackBar.open(`${position.name}`, `${position.quantity}`, { duration: 2000 });

		this.orderService.add(position);
	}
}
