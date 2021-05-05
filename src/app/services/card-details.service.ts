import { Injectable } from '@angular/core';
import { Payment } from '../Model/Payment';

@Injectable({
  providedIn: 'root'
})
export class CardDetailsService {

  payments: Payment[] = [
    {
      cardType: 'Debit',
      cardVendor: 'Visa',
      cardNumber: '1234567890123456',
      securityCode: '123',
      expirationDate: new Date('01/01/2023')
    },
    {
      cardType: 'Debit',
      cardVendor: 'MasterCard',
      cardNumber: '1234567890284756',
      securityCode: '456',
      expirationDate: new Date('01/01/2024')
    },
  
  ];

  constructor() { }

  getAllCards(userId: string){
    //get all the cards based on user id 
    return this.payments;
  }
}
