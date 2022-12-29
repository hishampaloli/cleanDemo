export interface UserData {
  email?: string;
  name: string;
  password: string;
}

export class User {
  email?: string;
  name: string;
  password: string;

  constructor({ email, name, password }: UserData) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
