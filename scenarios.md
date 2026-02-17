# Feature: Sign In

## Scenario: Sign in with valid credentials
Given the user is on the Login page  
When the user enters a valid email and password  
And the user clicks the 'Login' button  
Then the user should be signed in successfully  
And the user should be redirected to account page  


---

# Feature: Price Range filter

## Scenario: Sort by price range
Given the user is on the Home page  
When the user sets the minimum price to 50  
And the user sets the maximum price to 100  
Then only products with prices between 50 and 100 are displayed  


---

# Feature: Product details page

## Scenario: View product details
Given the user is on the Home page  
When the user clicks on the first product from the gallery  
Then the product details page is opened  
And the product name is displayed  
And the product image is displayed  
And the product price is displayed  
And the product description is displayed  


---

# Feature: Product sorting

## Scenario: Sort alphabetically in ascending order
Given the user is on the Home page  
When the user selects 'Name (A–Z)' sorting option  
Then 'Name (A–Z)' sorting option is selected  
And the products are sorted by name in ascending alphabetical order  