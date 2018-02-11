import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ShopItemsListComponent } from './componets/shop-items-list/shop-items-list.component';

import { ShopService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    ShopItemsListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [ShopService],
  bootstrap: [AppComponent, ShopItemsListComponent]
})
export class AppModule { }
