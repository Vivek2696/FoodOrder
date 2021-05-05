import { Injectable } from '@angular/core';
import { CartItem } from '../Model/CartItem';
import { FoodItem } from '../Model/FoodItem';
import { CartCommunicationService } from './cart-communication.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  cartItems: CartItem[] = []

  constructor(
    private _cartCommunication: CartCommunicationService
  ) {  }

  addItemToCart(item: FoodItem){

    let itemFound = false;

    for(let i = 0; i < this.cartItems.length; i++){
      if(this.cartItems[i].foodItemId == item.id){
        this.cartItems[i].quantity++;
        this.cartItems[i].cost += item.cost;
        itemFound = true;
      }
    }

    if(!itemFound){
      let newCartItem: CartItem = {
        foodItemId: item.id,
        foodItem: item.name,
        quantity: 1,
        cost: item.cost
      }
      this.cartItems.push(newCartItem);
      this._cartCommunication.notifyCartForNewItem();
    }
  }

  getAllCartItems(){
    return this.cartItems;
  }

  getAllOrderByUser(userId: string){
    
  }

}
