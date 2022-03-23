import { pages } from "../support/pages";
import { data } from "../support/data";

export class NavigationTest {

  async openLandingPage() {
    await browser.url("/");
    await pages.basePage.getSignInButton().waitForDisplayed({ timeout: 10000 });
  }
  async pressSignInButton() {
    await pages.basePage.getSignInButton().click();
  }
  async pressCreateAccountBtn() {
    await pages.inputEmailPage.getCreateAccountBtn().click();
  }

  async pressRegisterBtn() {
    await pages.createAccountPage.getRegisterButton().waitForDisplayed({ timeout: 10000 });
    await pages.createAccountPage.getRegisterButton().click();
  }

  async assertIsLoggedIn() {
    await pages.myAccountPage.getLogOutBtn().waitForDisplayed({
      timeout: 5000,
    });

    await pages.myAccountPage.getAccountNameText()
      .waitForDisplayed({
        timeout: 5000,
      })
    await expect(pages.myAccountPage.getAccountNameText()).toHaveText(
       `${data.userData.person.firstName} ${data.userData.person.lastName}`
     );
  }

  async assertOpenMyAccountPage() {
    await pages.myAccountPage.getIconText().waitForDisplayed({timeout: 10000});
    await expect(pages.myAccountPage.getIconText()).toHaveText("My account");
    await expect(pages.myAccountPage.getMyAccountText()).toHaveText(
      "Welcome to your account. Here you can manage all of your personal information and orders."
    );
    await pages.myAccountPage.getMyAccountNav().waitForDisplayed({
      timeout: 10000,
    });
  }
}
