import { Component, OnInit } from '@angular/core';
import { Order } from '../../Model/Order';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Order[] = [];
  isLoading: boolean;
  parameter: any;

  constructor(
    private _orderService: OrderService,
    private _router: Router
  ) { 
    this.isLoading = true; 
    this.parameter = this._router.getCurrentNavigation()?.extras.state;
    console.log(this.parameter);
    if(this.parameter != null || this.parameter != undefined){
      let orderData: Order = {
        id: 0,
        status: this.parameter.status,
        remainingTime: this.parameter.remainingTime,
        userId: this.parameter.userId,
        orderTotal: this.parameter.cartTotal
      }
      this.addNewOrder(orderData);
    }
  }

  ngOnInit(): void {
  }

  addNewOrder(orderDate: Order){
      this._orderService.addNewOrder(orderDate).subscribe(res => {
        //this.getAllOrders();
      });
  }

  getAllOrders(){
    this._orderService.getAllOrderByUser().subscribe(res => {
      this.orders = res;
      this.isLoading = false;
    },
    (error)=>{
      console.log(error);
    });
  }

}