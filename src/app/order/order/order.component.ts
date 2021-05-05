import { Component, OnInit } from '@angular/core';
import { Order } from '../../Model/Order';
import { OrderService } from '../../services/order.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Order[] = [];

  constructor(
    private _orderService: OrderService
  ) { }

  ngOnInit(): void {
    //this._orderService.getAllOrderByUser();
  }

}
