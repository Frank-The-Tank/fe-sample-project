import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShopItem } from './models/shopItem';

@Injectable()
export class ShopService {

  constructor(private af: AngularFireDatabase) {}

  findAllShopItems(): Observable<ShopItem[]> {

    return this.af.list('products').valueChanges().map(ShopItem.fromJsonList);

  }

}
