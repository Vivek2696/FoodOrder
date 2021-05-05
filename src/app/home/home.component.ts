import { Component, OnInit } from '@angular/core';
import { LoginCommunicationService } from '../services/login-communication.service';
import { FoodItem } from '../Model/FoodItem';
import { HomeService } from '../services/home.service';
import { OrderService } from '../services/order.service';
import { MatDialog } from '@angular/material/dialog';
import { AddToCartDialogComponent } from '../order/add-to-cart-dialog/add-to-cart-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  foodItems: FoodItem[] = [];
  allFoodItems: FoodItem[] = [];
  filterString: string = '';
  itemInDialogBox: FoodItem | undefined;
  dialogBoxFoodItem: string = '';
  isLoading: boolean = true;

  constructor(
    private _loginCommunication: LoginCommunicationService,
    private _homeService: HomeService,
    private _orderService: OrderService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.filterString =  '';
    this.isLoading = true;
    this._loginCommunication.raiseLoginEvent();
    this._homeService.getAllListings().subscribe(res => {
        this.allFoodItems = res;
        this.foodItems = this.allFoodItems;
        this.isLoading = false;
      },
      (error) => {
        console.log('error in getting food items: '+error)
      }
    );
    this.dialogBoxFoodItem = '';
  }

  filterBy(value: any){
    let tempList = this.allFoodItems;
    if(value.length > 0){
      let filtered = tempList.filter((item: FoodItem) => {
        return (item.name.toLowerCase().includes(value.toLowerCase()) ||
                item.restaurent_name.toLowerCase().includes(value.toLowerCase()) ||
                item.rating == value ||
                item.cost == value);
      })
      this.foodItems = filtered;
    } else{
      this.foodItems = this.allFoodItems;
    }
  }

  addItemToDialogBox(item: FoodItem){
    // this.itemInDialogBox = item;
    let foodItem = item.name + ' | ' + item.cost;

    const dialogRef = this.dialog.open(AddToCartDialogComponent, {
      width: '500px',
      data: {item: foodItem}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        this._orderService.addItemToCart(item);
      }
    });

  }

  removeItemFromDialogBox(){
    this.itemInDialogBox = undefined;
  }

  addItemToCart(){

    

    // if(this.itemInDialogBox != undefined){
    //   //add this item to cart using cart service
    //   this._orderService.addItemToCart(this.itemInDialogBox);
    // }
    // else{
    //   alert('Error occurred in adding to cart!');
    // }
  }

}
