import { pages } from "../support/pages";
import { data } from "../support/data";

export class InputTest {
  async fillOutCreateAccountForm() {
    await pages.createAccountPage
      .getInputField("customer_firstname")
      .setValue(await data.userData.person.firstName);
    await pages.createAccountPage
      .getInputField("customer_lastname")
      .setValue(await data.userData.person.lastName);
    await pages.createAccountPage
      .getInputField("email")
      .setValue(await data.userData.person.email);
    await pages.createAccountPage
      .getInputField("passwd")
      .setValue(await data.userData.person.password);
    await pages.createAccountPage
      .getInputField("address1")
      .setValue(await data.userData.person.address);
    await pages.createAccountPage
      .getInputField("city")
      .setValue(await data.userData.person.city);
    await pages.createAccountPage
      .getInputField("postcode")
      .setValue(await data.userData.person.postCode);
    await pages.createAccountPage
      .getInputField("postcode")
      .setValue(await data.userData.person.postCode);
    await pages.createAccountPage.setDropdownValue(
        "id_country",
        await data.userData.person.country
      );
    await pages.createAccountPage.setDropdownValue(
      "id_state",
      await data.userData.person.state
    );
    await pages.createAccountPage
      .getInputField("phone_mobile")
      .setValue(await data.userData.person.phone);

    await pages.createAccountPage
      .getInputField("alias")
      .setValue(await data.userData.person.alias);
  }
  async fillEmailField() {
    await pages.inputEmailPage
      .getEmailField()
      .setValue(await data.userData.person.email);
  }
}
