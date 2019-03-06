export class User {
  firstName: string;
  lastName: string;
  birthday: Date;
  address: Address;
   constructor(obj: any) {
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.birthday = obj.birthday;
        const addressFill = new Address();
        addressFill.street = obj.address.street;
        addressFill.city = obj.address.city;
        addressFill.state = obj.address.state;
        addressFill.zip = obj.address.zip;
        this.address = addressFill;
    }
}

export class Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}
