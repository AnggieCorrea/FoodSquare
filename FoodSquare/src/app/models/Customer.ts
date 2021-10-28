import { Product } from './Product';
import { Purchase } from './Purchase';

export interface customerInterface {
  idCustomer: number;
  name: string;
  lastName: string;
  email: string;
  gender: string;
  city: string;
  country: string;
  password: string;
  shopping: Purchase[];
  cart: Product[];
}

export class Customer implements customerInterface {
  idCustomer: number;
  name: string;
  lastName: string;
  email: string;
  gender: string;
  city: string;
  country: string;
  password: string;
  shopping: Purchase[];
  cart: Product[];

  constructor(
    idCustomer: number,
    name: string,
    lastName: string,
    password: string,
    gender: string,
    country: string,
    city: string,
    email: string,
    shopping: Purchase[],
    cart: Product[]
  ) {
    this.idCustomer = idCustomer;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.gender = gender;
    this.city = city;
    this.country = country;
    this.password = password;
    this.shopping = shopping;
    this.cart = cart;
  }

  //gets
  getIdCustomer(): number {
    return this.idCustomer;
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
  getGender(): string {
    return this.gender;
  }
  getCity(): string {
    return this.city;
  }
  getCountry(): string {
    return this.country;
  }
  getPassword(): string {
    return this.password;
  }
  getShopping(): Purchase[] {
    return this.shopping;
  }
  getCart(): Product[] {
    return this.cart;
  }

  //sets
  setName(name: string): void {
    this.name = name;
  }
  setLastName(lastName: string): void {
    this.lastName = lastName;
  }
  setEmail(email: string): void {
    this.email = email;
  }
  setGender(gender: string): void {
    this.gender = gender;
  }
  setCity(city: string): void {
    this.city = city;
  }
  setCountry(country: string): void {
    this.country = country;
  }
  setPassword(password: string): void {
    this.password = password;
  }
  setShopping(shopping: Purchase[]): void {
    this.shopping = shopping;
  }
  setCart(cart: Product[]): void {
    this.cart = cart;
  }
}
