import { BasePage } from "./basePage";

export class MyAccountPage extends BasePage {
  getLogOutBtn() {
    return $(".logout");
  }

  getMyAccountText() {
    return $(".info-account");
  }

  getAccountNameText() {
    return $('//a[@class="account"]/span');
  }

  getIconText() {
    return $('//span[@class="navigation_page"]');
  }

  getMyAccountNav() {
    return $(".myaccount-link-list");
  }
}
