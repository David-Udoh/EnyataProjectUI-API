# EnyataAPI-UI
A Playwright project for saucedemo.com UI and petstore API (user endpoint only)
* The tests folder contains the login, add/removeProducts,sortOrder(A-Z), sortPrice(high or low),view/checkout files
* The saucedemo UI uses a page object model, internal helpers for clean codes, maintenance and needed assertions
* The page object model is in pages folder and test files are in test folder all with steps/comment for non-technicals to understand
* The sortOrder(A-Z) logs products on console for assertion (ascending and descending order
* The sortPrice(high or low) logs prices on console by lowest to highest and highest to lowest
* The view/checkout logs added product to cart on console and logs removed product from cart

PetstoreAPI
* https://petstore.swagger.io/#/user 
* No authentication for basic function
* No dot.env file created to hide authentications, tokens as it was not needed
* No test data created as not required, endpoint has Array/ list endpoint for multiple users
* The petstore API folder is created in the test folder for user endpoint
* the folder contains users endpoint and API chaining neccessary for user flow
* All neccessary assertions and validations like logging response to validate action in API chaining
* Below is link to Postman collection for Petstore users API
* https://www.postman.com/bold-shuttle-739357/workspace/enyata-qa-technical-assessment/collection/16554325-24892508-3c6b-47f5-a86e-e0b33f7705be?action=share&source=copy-link&creator=16554325
