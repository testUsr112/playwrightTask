@ui @sorting @regression
Feature: Product sorting

  @ascending
  Scenario: Sort alphabetically in ascending order
    Given the user is on the Home page
    When the user selects 'Name (A–Z)' sorting option
    Then the products are sorted by name in ascending alphabetical order
