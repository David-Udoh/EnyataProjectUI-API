import {test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test ('loginStandard_user', async ({page}) =>{

   //Initialize the login page
   const login = new LoginPage(page)

   //Call url page
   await login.gotoLoginPage() //hover and command + click directs you back to LoginPage (cntrl click on window)

   //username and password
   await login.login('standard_user', 'secret_sauce')

   //Check if the title of the page is 'Swag Labs' after login
   await expect(page).toHaveTitle('Swag Labs');

// Add items to the cart// Define products to add to cart
const productsToAdd = [
    { selector: '[data-test="add-to-cart-sauce-labs-backpack"]', name: 'Sauce Labs Backpack' },
    { selector: '[data-test="add-to-cart-sauce-labs-bike-light"]', name: 'Sauce Labs Bike Light' },
    { selector: '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]', name: 'Sauce Labs Bolt T-Shirt' }
   ];

// Add products and log names
console.log("Adding products to the cart...");
for (const product of productsToAdd) {
    await page.locator(product.selector).click();
    console.log(`Added: ${product.name}`);
}

// Open shopping cart
await page.locator('[data-test="shopping-cart-link"]').click();

// Remove a product and log its removal
const removedProduct = { selector: '[data-test="remove-sauce-labs-bike-light"]', name: 'Sauce Labs Bike Light' };
console.log(`Removing: ${removedProduct.name}`);
await page.locator(removedProduct.selector).click();

  //Click on checkout link
  await page.locator('[data-test="checkout"]').click();

  //Define user details for ease of use by different users
  const user = { 
    firstName: 'Femi', 
    lastName: 'Fresh', 
    postalCode: '101501' 
   };
  
   //fill checkout details
  await page.locator('[data-test="firstName"]').fill(user.firstName);
  await page.locator('[data-test="lastName"]').fill(user.lastName);
  await page.locator('[data-test="postalCode"]').fill(user.postalCode);

  //Click on continue 
  await page.locator('[data-test="continue"]').click();

  //Click on finish
  await page.locator('[data-test="finish"]').click();

  //Assert that is visible
  await expect(page.locator('[data-test="complete-header"]')).toBeVisible();

  //Assert that "back to product link" is visible and click 
  await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
  await page.locator('[data-test="back-to-products"]').click();

  await page.close();
});