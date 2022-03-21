import {BasePage} from '../pageobjects/basePage';
import {CreateAccountPage} from '../pageobjects/createAccountPage';
import {InputEmailPage} from '../pageobjects/inputEmailPage'

class Pages {
    constructor() {
        this.basePage = new BasePage();
        this.createAccountPage = new CreateAccountPage();
        this.inputEmailPage = new InputEmailPage();
    }
}

export const pages = new Pages();