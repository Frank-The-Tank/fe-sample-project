import {Injectable} from '@angular/core';
import { ShopItem } from '../../models/shopItem';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import {of} from 'rxjs/observable/of';
@Injectable()
export class CartService {
  private itemsInCartSubject: BehaviorSubject<ShopItem[]> = new BehaviorSubject([]);
  private itemsInCart: ShopItem[] = [];

  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public addToCart(item: ShopItem) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }

  public getItems(): Observable<ShopItem[]> {
    return this.itemsInCartSubject;
  }
}
