import { pages } from "../support/pages";
import { data } from "../support/data";

export class InputTest {
  async fillOutCreateAccountForm() {
    await pages.createAccountPage
      .getInputField("firstName")
      .setValue(await data.userData.person.firstname);
    await pages.createAccountPage
      .getInputField("lastName")
      .setValue(await data.userData.person.lastName);
    await pages.createAccountPage
      .getInputField("email")
      .setValue(await data.userData.person.email);
    await pages.createAccountPage
      .getInputField("password")
      .setValue(await data.userData.person.password);
    await pages.createAccountPage
      .getInputField("address1")
      .setValue(await data.userData.person.address);
    await pages.createAccountPage
      .getInputField("city")
      .setValue(await data.userData.person.city);
    await pages.createAccountPage.setDropdownValue(
      "state",
      await data.userData.person.state
    );
    await pages.createAccountPage
      .getInputField("postalCode")
      .setValue(await data.userData.person.postCode);
    await pages.createAccountPage.setDropdownValue(
      "country",
      await data.userData.person.country
    );
    await pages.createAccountPage
      .getInputField("workPhone")
      .setValue(await data.userData.person.phone);
  }
  // async assertCheckEmailPage() {
  //     await pages.checkEmailPage.getCheckEmailHeader().waitForDisplayed({ timeout: 5000 })
  //     await pages.checkEmailPage.getEmailText().waitForDisplayed()
  //     await expect(pages.checkEmailPage.getEmailText()).toHaveText(`We sent an email to ${data.userData.oracleUser.email} with a button to verify your email address.`)
  // }
}
