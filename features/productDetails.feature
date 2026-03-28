@ui @product @smoke
Feature: Product details page

  @view
  Scenario: View product details
    Given the user is on the Home page
    When the user clicks on the first product from the gallery
    Then the product details page is opened
    And the product name is displayed
    And the product image is displayed
    And the product price is displayed
    And the product description is displayed
