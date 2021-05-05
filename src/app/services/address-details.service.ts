import { Injectable } from '@angular/core';
import { Address } from '../Model/Address';

@Injectable({
  providedIn: 'root'
})
export class AddressDetailsService {

  address: Address[] = [
    {
      name: 'main',
      address: '8th Main St, Louisville KY-40204'
    },
    {
      name: 'secondary',
      address: '1000 Red Stone Way, Louisville KY-40214'
    }
  ]

  constructor() { }

  getAllAddresses(userId: string){
    //get it from api later
    return this.address;
  }

}
