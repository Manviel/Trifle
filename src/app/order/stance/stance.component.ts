import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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
		private orderService: OrderService
	) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.positionService.fetch(params['id']).subscribe(res => {
				this.stream = res;
			});
		});
	}

	addToOrder(position: Position) {
		this.orderService.add(position);
	}
}
