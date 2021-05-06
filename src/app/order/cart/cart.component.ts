import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../Model/CartItem';
import { OrderService } from '../../services/order.service';
import { Order } from '../../Model/Order';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  cartTotal: number = 0;

  constructor(
    private _orderService: OrderService,
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.cartItems = this._orderService.getAllCartItems();
    this.cartItems.forEach(element => {
      this.cartTotal += element.cost;
    });
  }

  placeOrder(){
    let id = this._userService.getCurrentUser()?.id;
    if(id != undefined){
      let newOrder: Order = {
        id: 0,
        status: 'Placed',
        remainingTime: 25,
        userId:id,
        orderTotal: this.cartTotal
      } 
      this._router.navigateByUrl('/orders', {state: newOrder});
    } else{
      console.log('error occurred in placing order');
    }
  }

}
