export interface ProductData {
  title: string;
  description: string;
  stock: number;
  price: number;
  image: string;
}

export class Product {
  title: string;
  description: string;
  stock: number;
  price: number;
  image: string;

  constructor({ description, image, price, stock, title }: ProductData) {
    this.title = title;
    this.description = description;
    this.stock = stock;
    this.image = image;
    this.price = price;
  }
}
