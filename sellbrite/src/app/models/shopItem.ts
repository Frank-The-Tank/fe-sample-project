export class ShopItem {

  constructor (
    public $key: string,
    public filename: string,
    public name: string,
    public price: number
  ) {}

  static fromJsonList(array): ShopItem[] {
    return array.map(ShopItem.fromJson);
  }

  static fromJson({$key, filename, name, price}): ShopItem {
    return new ShopItem(
      $key,
      filename,
      name,
      price
    );
  }

}
