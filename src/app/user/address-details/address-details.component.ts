import { Component, OnInit } from '@angular/core';
import { Address } from '../../Model/Address';
import { AddressDetailsService } from '../../services/address-details.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {

  addresses: Address[] = []

  constructor(
    private _addressDetailsService: AddressDetailsService
  ) { }

  ngOnInit(): void {
    this.addresses = this._addressDetailsService.getAllAddresses('admin');
  }

}
