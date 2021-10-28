import { Product } from './Product';

export interface purchaseInterface {
  idPurchase: number;
  idCustomer: number;
  idShop: number;
  shopping: Product[];
  price: number;
}

export class Purchase implements purchaseInterface {
  idPurchase: number;
  idCustomer: number;
  idShop: number;
  shopping: Product[];
  price: number;

  constructor(
    idPurchase: number,
    idCustomer: number,
    idShop: number,
    shopping: Product[],
    price: number
  ) {
    this.idPurchase = idPurchase;
    this.idCustomer = idCustomer;
    this.idShop = idShop;
    this.shopping = shopping;
    this.price = price;
  }

  //gets
  getIdPurchase(): number {
    return this.idPurchase;
  }
  getIdCustomer(): number {
    return this.idCustomer;
  }
  getIdShop(): number {
    return this.idShop;
  }
  getShopping(): Product[] {
    return this.shopping;
  }
  getPrice(): number {
    return this.price;
  }

  //sets
  setIdCustomer(idCustomer: number): void {
    this.idCustomer = idCustomer;
  }
  setIdShop(idShop: number): void {
    this.idShop = idShop;
  }
  setShopping(shopping: Product[]): void {
    this.shopping = shopping;
  }
  setPrice(price: number): void {
    this.price = price;
  }
}
