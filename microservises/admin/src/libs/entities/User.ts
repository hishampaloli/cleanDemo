export interface UserData {
  email: string;
  name: string;
  address: string;
  image: string;
  userId: string;
  isBlocked: boolean;
}

export class UserProfile {
  email: string;
  name: string;
  address: string;
  image: string;
  userId: string;
  isBlocked: boolean;

  constructor({ email, name, address, image, isBlocked, userId }: UserData) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.image = image;
    this.userId = userId;
    this.isBlocked = isBlocked;
  }
}
