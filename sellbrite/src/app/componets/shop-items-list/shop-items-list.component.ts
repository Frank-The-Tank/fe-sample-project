import { Component, OnInit, Input } from '@angular/core';
import { ShopItem } from '../../models/shopItem';

@Component({
  selector: 'app-shop-items-list',
  templateUrl: './shop-items-list.component.html',
  styleUrls: ['./shop-items-list.component.css']
})
export class ShopItemsListComponent implements OnInit {

  @Input()
  shopItems: ShopItem[];

  constructor() { }

  ngOnInit() {
  }

}
