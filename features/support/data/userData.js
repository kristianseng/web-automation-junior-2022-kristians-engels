const { faker } = require("@faker-js/faker");

export default class UserData {
  constructor() {
    this.person = new Person(
      faker.name.firstName(),
      faker.name.lastName(),
      faker.internet.email(),
      faker.internet.password(),
      faker.address.streetAddress(),
      faker.address.city(),
      faker.address.state(),
      faker.address.zipCode(),
      faker.address.country(),
      faker.phone.phoneNumber()
    );
  }
}

class Person {
  constructor(
    firstname,
    lastName,
    email,
    password,
    address,
    city,
    state,
    postCode,
    country,
    phone
  ) {
    this.firstname = firstname;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.address = address;
    this.city = city;
    this.state = state;
    this.postCode = postCode;
    this.country = country;
    this.phone = phone;
  }
}
