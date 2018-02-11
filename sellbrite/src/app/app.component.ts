import { Component, OnInit } from '@angular/core';
import {ShopItem} from './models/shopItem';
import {ShopService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  allShopItems: ShopItem[];
  filteredShopItems: ShopItem[];

  constructor(private service: ShopService) {}

  ngOnInit() {
    this.service.findAllShopItems()
      .subscribe(
        shopItems => this.allShopItems = this.filteredShopItems = shopItems
      );
  }

  search(search: string) {
    this.filteredShopItems = this.allShopItems.filter(shopItem =>
      shopItem.name.toLowerCase().includes(search.toLowerCase())
    );
  }


}
