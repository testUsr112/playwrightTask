@ui @filter @regression
Feature: Price Range filter

  @price-range
  Scenario: Sort by price range
    Given the user is on the Home page
    When the user sets the minimum price to 50
    Then only products with prices between 50 and 100 are displayed
