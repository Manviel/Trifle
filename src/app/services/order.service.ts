import { Injectable } from "@angular/core";

import { Position, ListItem } from "../interfaces/interface";

@Injectable()
export class OrderService {
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

    this.computePrice();
  }

  remove(order: ListItem, data) {
    const idx = data.list.findIndex(p => p._id === order._id);
    
    data.list.splice(idx, 1);

    this.list = data.list;
    this.price = data.price;

    this.computePrice();
    
    data.price = this.price;
  }

  clear() {}

  computePrice() {
    this.price = this.list.reduce((total, i) => {
      return total += i.quantity * i.cost
    }, 0);
  }

  getList = () => this.list;

  getPrice = () => this.price;
}