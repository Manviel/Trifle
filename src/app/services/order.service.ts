import { Injectable } from "@angular/core";

@Injectable()
export class OrderService {
  add(position) {
    console.log(position);
  }

  remove() {}

  clear() {}
}