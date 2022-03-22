import { pages } from "../support/pages";

export class NavigationTest {
  async pressSignInButton() {
    await pages.basePage.getSignInButton().click();
  }
  async pressCreateAccountBtn() {
    await pages.inputEmailPage.getCreateAccountBtn().click();
  }

  async pressRegisterBtn() {
    pages.createAccountPage.getRegisterButton().click();
  }

  async openLandingPage() {
    await browser.url("/");
    await pages.basePage
      .getCreateAccountBtn()
      .waitForDisplayed({ timeout: 5000 });
  }
  async assertIsLoggedIn() {
    await pages.MyAccountPage.getAccountNameText().toHaveText(
      `${data.userData.person.firstName} ${data.userData.person.lastName}`
    );
    await pages.MyAccountPage.getLogOutBtn().waitForDisplayed({
      timeout: 5000,
    });
  }

  async assertOpenMyAccountPage() {
    await pages.MyAccountPage.getIconText().toHaveText("My account");
    await pages.MyAccountPage.getMyAccountText().toHaveText(
      "Welcome to your account. Here you can manage all of your personal information and orders."
    );
    await pages.MyAccountPage.getMyAccountNav().waitForDisplayed({
      timeout: 5000,
    });
  }
}
