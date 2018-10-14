import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Observable } from "rxjs";

import { Position, ListItem, Order } from "../interfaces/interface";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }

  public list: ListItem[] = []
  public price = 0

  add(position: Position) {
    const order: ListItem = Object.assign({}, {
      name: position.name,
      cost: position.cost,
      quantity: position.quantity,
      _id: position._id
    });

    const candidate = this.list.find(p => p._id === order._id);

    if (candidate) {
      candidate.quantity += order.quantity;
    } else {
      this.list.push(order);
    }

    this.price = this.computePrice(this.list, this.price);
  }

  remove(order: ListItem, data) {
    const idx = data.list.findIndex(p => p._id === order._id);

    data.list.splice(idx, 1);

    this.price = this.computePrice(data.list, data.price);

    data.price = this.price;
  }

  computePrice(list, price) {
    return price = list.reduce((total, i) => {
      return total += i.quantity * i.cost
    }, 0);
  }

  clear() {
    this.list = [];
    this.price = 0;
  }

  getList = () => this.list;

  getPrice = () => this.price;

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>('/api/order', order)
  }

  fetch(params: any = {}): Observable<Order[]> {
    return this.http.get<Order[]>('/api/order', {
      params: new HttpParams({
        fromObject: params
      })
    })
  }
}