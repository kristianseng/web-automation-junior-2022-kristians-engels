import { BasePage } from "./basePage";

export class CreateAccountPage extends BasePage {
  getInputField(name) {
    return $(`input[name="${name}"]`);
  }

  getDropdownField(name) {
    return $(`select[name="${name}"]`);
  }

  async setDropdownValue(name, value) {
    await this.getDropdownField(name).click();
    await this.getDropdownField(name).selectByAttribute("value", value);
  }

  getRegisterButton() {
    return $("#submitAccount");
  }
}
