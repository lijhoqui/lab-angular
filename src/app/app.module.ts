import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { YesOrNotService } from './services/yesornot.service';
import { YesornotComponent } from './components/yesornot/yesornot.component';



@NgModule({
  declarations: [
    AppComponent,
    YesornotComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [YesOrNotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
