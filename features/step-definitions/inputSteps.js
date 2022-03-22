import { And, When } from "@wdio/cucumber-framework";
import { tests } from "../support/tests";

When("User enters a new email", async function () {
  await tests.inputTest.fillEmailField();
});

And("User fills in mandatory user details", async function () {
  await tests.inputTest.fillOutCreateAccountForm();
});
