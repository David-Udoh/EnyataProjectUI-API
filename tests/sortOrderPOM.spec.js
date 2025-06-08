import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test ('Sort A-Z, Z-A', async ({ page }) => {

   // Initialize the login page
   const login = new LoginPage(page);

   // Call URL page
   await login.gotoLoginPage();

   // Username and password
   await login.login('standard_user', 'secret_sauce');

   // Check if the title of the page is 'Swag Labs' after login
   await expect(page).toHaveTitle('Swag Labs');

   // Check if the Cart link icon is enabled
   await expect(page.locator('[data-test="shopping-cart-link"]')).toBeEnabled();

   // Check if the URL of the page is 'https://www.saucedemo.com/inventory.html'
   await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

   // Check if the product sort container is visible
   await expect(page.locator('[data-test="product-sort-container"]')).toBeVisible();

   // Check if the value of the product sort container is 'az'
   await expect(page.locator('[data-test="product-sort-container"]')).toHaveValue('az');

   // Get the product names
   const productNames = await page.$$eval('.inventory_item_name', 
       elements => elements.map(element => element.textContent));
   console.log("Product Names:", productNames); // Log product names for verification

   // Sort the product names
   const sortedProductNames = [...productNames].sort();

   // Check if the product names are sorted
   expect(productNames).toEqual(sortedProductNames);

   // Change the item sorting to Z to A on the webpage
   await page.locator('[data-test="product-sort-container"]').selectOption('za');

   // Check if the value of the product sort container is 'za'
   await expect(page.locator('[data-test="product-sort-container"]')).toHaveValue('za');

   // Get the product names again after sorting change
   const productNamesDesc = await page.$$eval('.inventory_item_name', 
       elements => elements.map(element => element.textContent));
   console.log("Product Names (Z-A):", productNamesDesc); // Log product names after sorting change

   // Sort the product names in descending order
   const sortedProductNamesDesc = [...productNamesDesc].sort().reverse();

   // Check if the product names are sorted in descending order
   expect(productNamesDesc).toEqual(sortedProductNamesDesc);

   // Close the page
   await page.close();
});
