import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../Model/CartItem';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  cartTotal: number = 0;

  constructor(
    private _orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.cartItems = this._orderService.getAllCartItems();
    this.cartItems.forEach(element => {
      this.cartTotal += element.cost;
    });
  }

}
