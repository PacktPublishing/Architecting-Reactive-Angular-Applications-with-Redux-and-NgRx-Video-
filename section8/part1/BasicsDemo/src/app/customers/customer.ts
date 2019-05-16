export interface Customer {
  id: number;
  name: string;
  address: Address;
}

export interface Address {
  postalCode: string;
  city: string;
  country: string;
}