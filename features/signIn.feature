@ui @login @smoke @positive
Feature: Sign In

  Scenario: Sign in with valid credentials
    Given the user is on the Login page
    When the user enters a valid email and password
    And the user clicks the 'Login' button
    Then the user should be redirected to account page
