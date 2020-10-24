export interface User {
  userId: string;
  active: boolean;
  role: Code;
  email: string;
  password: string;
  lastLogin: string;
}

export class Description {
  en: string;
  fr: string;
}

export class Code {
  description: Description;
  code: string;
}

export class Address {
  street: string;
  postalCode: string;
  city: Code;
  country: Code;
}
