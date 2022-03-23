const { faker } = require("@faker-js/faker");

export default class UserData {
  constructor() {
    let stateValue = Math.floor(Math.random() * 52 + 1);

    this.person = new Person(
      faker.name.firstName(),
      faker.name.lastName(),
      faker.internet.email(),
      faker.internet.password(),
      faker.address.streetAddress(true),
      faker.address.city(),
      2,
      faker.address.zipCode("#####"),
      21,
      faker.phone.phoneNumber("420#####"),
      // car manufacturer helps to remember the address
      faker.vehicle.manufacturer()
    );
  }
}

class Person {
  constructor(
    firstName,
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
    this.firstName = firstName;
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
