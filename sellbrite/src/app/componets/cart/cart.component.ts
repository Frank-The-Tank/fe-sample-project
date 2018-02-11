import {Component, OnInit} from '@angular/core';
import {CartService} from './cart.service';
import {ShopItem} from '../../models/shopItem';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public shoppingCartItems$: Observable<ShopItem[]> = of([]);
  public shoppingCartItems: ShopItem[] = [];

  constructor(private cartService: CartService) {
    this.shoppingCartItems$ = this
      .cartService
      .getItems();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }

  ngOnInit() {
  }

}
