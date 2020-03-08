import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Address} from '../domain/address.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

@Injectable()
export class DaDataService {
  private daDataHttpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Token 0b14a9e7217d33a25611b95492b8d8c5671c16ed',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'x-secret' : '519500e8913ec365906920b6acdb91e98de46fde'
    })
  };

  private dadataUrl: string = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
                               
  constructor(private http: HttpClient) { }

  getData(params: string): Observable<any> {
    let query = { query: params, count: 6 };
    return this.http.post<any>(this.dadataUrl, query, this.daDataHttpOptions)
      .map(this.extractData).catch(this.handleErrorObservable);
      
  }

extractData(res: any) {
  let addresses: Address[] = [];
  for(let data of res.suggestions) {
    let address: Address = new Address();
    address.fullAddress = data.value;
    address.postalCode = data.data.postal_code;
    address.city = data.data.city;
    address.street = data.data.street;
    address.house = data.data.house;
    addresses.push(address);
  }
  return addresses;
}

handleErrorObservable (error: Response | any) {
  console.error(error.message || error);
  return Observable.throw(error.message || error);
}
}