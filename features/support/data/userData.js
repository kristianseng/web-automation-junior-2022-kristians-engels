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
      Math.floor(Math.random() * 52 + 1),
      faker.address.zipCode(),
      21,
      faker.phone.phoneNumber(),
      // car manufacturer helps to remember the address
      faker.vehicle.manufacturer()
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
    phone,
    alias
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
    this.alias = alias;
  }
}
