import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { DaDataComponent} from './daData/da-data.component'

import { DaDataService } from './services/da-data.service'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, NgSelectModule, ReactiveFormsModule ],
  declarations: [ AppComponent, DaDataComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ DaDataService ]
})
export class AppModule { }
