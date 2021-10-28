export interface productInterface {
  idProduct: number;
  name: string;
  description: string;
  price: number;
}

export class Product implements productInterface {
  idProduct: number;
  name: string;
  description: string;
  price: number;

  constructor(
    idProduct: number,
    name: string,
    description: string,
    price: number
  ) {
    this.idProduct = idProduct;
    this.name = name;
    this.description = description;
    this.price = price;
  }

  //gets
  getIdProduct(): number {
    return this.idProduct;
  }
  getName(): string {
    return this.name;
  }
  getDescription(): string {
    return this.description;
  }
  getPrice(): number {
    return this.price;
  }

  //sets
  setName(name: string): void {
    this.name = name;
  }
  setDescription(description: string): void {
    this.description = description;
  }
  setPrice(price: number): void {
    this.price = price;
  }
}
