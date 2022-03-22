import { Given, And, Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests";

Given("User has opened the landing page", async function () {
  await tests.navigationTest.openLandingPage();
});

And("User presses the Sign In button", async function () {
  tests.navigationTest.pressSignInButton();
});

And("User presses Create account button", async function () {
  await tests.navigationTest.pressCreateAccountBtn();
});

And("User presses the Register button", async function () {
  await tests.navigationTest.pressRegisterBtn();
});

Then("User is logged in", async function () {
  await tests.navigationTest.assertIsLoggedIn();
});

And("User is in My account page", async function () {
  await tests.navigationTest.assertOpenMyAccountPage();
});
