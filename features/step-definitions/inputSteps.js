import {And, When} from '@wdio/cucumber-framework';
import {tests} from '../support/tests'


When("User enters a new {email} as email", async function(email) {
    //await tests.loginTest.fillPasswordField(password);
})

And("User fills in mandatory user details", async function() {
    //await tests.loginTest.pressSignInButton();
})