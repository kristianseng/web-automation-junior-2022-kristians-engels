import {Given, And, Then} from '@wdio/cucumber-framework';
import {tests} from '../support/tests'

Given("User has opened the landing page", async function() {
    //await tests.navigationTest.openLandingPage();
})

And("User presses the Sign In button", async function() {
    //await tests.navigationTest.pressCreateAccountButton();
})

And("User presses Create account button", async function() {
    //await tests.navigationTest.pressSignUpButton();
})

And("User presses the Register button", async function() {
    //await tests.navigationTest.pressSignUpButton();
})

Then("User is logged in", async function() {
    //await tests.navigationTest.pressSignUpButton();
})

And("User is in My account page", async function() {
    //await tests.signupTest.assertCheckEmailPage();
})