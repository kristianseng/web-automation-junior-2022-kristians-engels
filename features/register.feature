Feature: TDL registration test

  Scenario: Register a new user
    Given User has opened the landing page
    And User presses the Sign In button
    When User enters a new <email> as email
    And User presses Create account button
    And User fills in mandatory user details
    And User presses the Register button
    Then User is logged in
    And User is in My account page