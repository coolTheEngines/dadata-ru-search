import { Component, OnInit } from '@angular/core';
import { DaDataService } from '../services/da-data.service'
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { FormGroup, FormControl } from '@angular/forms';
import { Address } from '../domain/address.model'

@Component({
  selector: 'da-data',
  template: `<ng-select [items]="addresses"
                   bindLabel="name"
                   placeholder="Select city"
                   [(ngModel)]="data"
                   (ngModelChange)="onChange(data.value)"
                   (search)=search($event)
                   [searchFn]=search1>

            </ng-select>
            
            <form-address [addressForm]="addressForm"></form-address>`,
  styleUrls: []
})
export class DaDataComponent {
    private addressForm = new FormGroup({
      postalCode: new FormControl(''),
      city: new FormControl(''),
      street: new FormControl(''),
      house: new FormControl('')
  });

  private data: any;
  private addresses: any[] = [];

  constructor(private daDadataService: DaDataService){}

  private search1(arg: any, arg2: any) {
    return true;
  }

  private search(term:any){
    this.daDadataService.getData(term.term)
          .subscribe(data => {
            let viewAddresses: any[] = [];
            for (let i = 0; i < data.length; i++) {
              viewAddresses.push({name: data[i].fullAddress, value: data[i]});
            }
            this.addresses = viewAddresses});
  }

  private onChange(address: Address){
    this.addressForm.controls['postalCode'].setValue(address.postalCode);
    this.addressForm.controls['city'].setValue(address.city);
    this.addressForm.controls['street'].setValue(address.street);
    this.addressForm.controls['house'].setValue(address.house);
  }

}