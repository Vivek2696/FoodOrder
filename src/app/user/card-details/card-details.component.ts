import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/Model/Payment';
import { CardDetailsService } from '../../services/card-details.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  payments: Payment[] = [];

  constructor(
    private _cardDetailsService: CardDetailsService
  ) { }

  ngOnInit(): void {
    this.payments = this._cardDetailsService.getAllCards('admin');
  }

  getCardLastFourDigit(cardNumber: string){
    return cardNumber.slice(cardNumber.length - 4);
  }

}
