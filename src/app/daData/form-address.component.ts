import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Address } from '../domain/address.model'

@Component({
  selector: 'form-address',
  template: `           
            <form [formGroup]="addressForm">
            <div>
              <label>
                postalCode:
                <input type="text" formControlName="postalCode">
              </label> 
               </div>
               <div>
              <label>
                city:
                <input type="text" formControlName="city">
              </label>
              </div>
              <div>
              <label>
                street
                <input type="text" formControlName="street">
              </label>
              </div>
              <div>
              <label>
                house:
                <input type="text" formControlName="house">
              </label>
              </div>
            </form>`,
  styleUrls: []
})
export class FormAddressComponent {
  @Input()
  private addressForm;
}