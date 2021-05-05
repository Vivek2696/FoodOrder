import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartCommunicationService {

  newItemArrival: EventEmitter<number>;

  constructor() { 
    this.newItemArrival = new EventEmitter<number>();
  }

  notifyCartForNewItem(){
    this.newItemArrival.emit(1);
  }

}
