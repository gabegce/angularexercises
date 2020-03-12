import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CurlyQuotesPipe } from './curlyquotes.pipe';
@NgModule({
 imports: [ BrowserModule ],
 declarations: [ AppComponent, CurlyQuotesPipe ],
 bootstrap: [ AppComponent ]
})
export class AppModule { }
