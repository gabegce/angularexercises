import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NameAddressForm } from './name-address.component';

@NgModule({
 imports: [ BrowserModule ],
 declarations: [ AppComponent, NameAddressForm ],
 bootstrap: [ AppComponent ]
})
export class AppModule { }
