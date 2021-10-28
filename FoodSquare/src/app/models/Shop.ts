import { Product } from './Product';

export interface ShopInterface {
  idShop: number;
  name: string;
  email: string;
  address: string;
  password: string;
  products: Product[];
  //lista de ventas
}

export class Shop implements ShopInterface {
  idShop: number;
  name: string;
  email: string;
  address: string;
  password: string;
  products: Product[];
  //lista de ventas

  constructor(
    idShop: number,
    name: string,
    email: string,
    address: string,
    password: string,
    products: Product[]
    //lista de ventas
  ) {
    this.idShop = idShop;
    this.name = name;
    this.email = email;
    this.address = address;
    this.password = password;
    this.products = products;
  }

  //gets
  getIdShop(): number {
    return this.idShop;
  }
  getName(): string {
    return this.name;
  }
  getLastName(): string {
    return this.name;
  }
  getEmail(): string {
    return this.email;
  }
  getAddress(): string {
    return this.address;
  }
  getPassword(): string {
    return this.password;
  }
  getProducts(): Product[] {
    return this.products;
  }

  //sets
  setName(name: string): void {
    this.name = name;
  }
  setEmail(email: string): void {
    this.email = email;
  }
  setAddress(address: string): void {
    this.address = address;
  }
  setPassword(password: string): void {
    this.password = password;
  }
  setProducts(products: Product[]): void {
    this.products = products;
  }
}
