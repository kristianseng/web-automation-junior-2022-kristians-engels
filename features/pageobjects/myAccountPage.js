import { BasePage } from "./basePage";

export class MyAccountPage extends BasePage {
  getLogOutBtn() {
    return $(".logout");
  }

  getMyAccountText() {
    return $(".info-account");
  }

  getAccountNameText() {
    return $('//span[@class="account"][1]');
  }

  getIconText() {
    return $('//span[@class="breadcrumb"][2]');
  }

  getMyAccountNav() {
    return $(".myaccount-link-list");
  }
}
