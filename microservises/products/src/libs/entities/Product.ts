export interface ProductData {
  title: string;
  description: string;
  stock: number;
  price: number;
  image: string;
  id?: string;
}

export class Product {
  title: string;
  description: string;
  stock: number;
  price: number;
  image: string;
  id?: string;

  constructor({ description, image, price, stock, title, id }: ProductData) {
    this.title = title;
    this.id = id;
    this.description = description;
    this.stock = stock;
    this.image = image;
    this.price = price;
  }
}
