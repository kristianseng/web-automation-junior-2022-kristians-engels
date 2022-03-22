import { BasePage } from "../pageobjects/basePage";
import { CreateAccountPage } from "../pageobjects/createAccountPage";
import { InputEmailPage } from "../pageobjects/inputEmailPage";
import { MyAccountPage } from "../pageobjects/myAccountPage";

class Pages {
  constructor() {
    this.basePage = new BasePage();
    this.createAccountPage = new CreateAccountPage();
    this.inputEmailPage = new InputEmailPage();
    this.MyAccountPage = new MyAccountPage();
  }
}

export const pages = new Pages();
