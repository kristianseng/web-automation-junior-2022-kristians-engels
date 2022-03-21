import { BasePage } from "./basePage";

export class InputEmailPage extends BasePage {
  getEmailField() {
    return $("#email_create");
  }

  getCreateAccountBtn() {
    return $("#SubmitCreate");
  }
}
