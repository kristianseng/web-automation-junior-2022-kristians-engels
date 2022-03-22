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
  async assertIsLoggedIn() {}
  async assertOpenMyAccountPage() {}
}
