import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test ('Sort by Low to High & High to Low Price', async ({ page }) => {

   // Initialize the login page
   const login = new LoginPage(page);

   // Call URL page
   await login.gotoLoginPage();

   // Username and password
   await login.login('standard_user', 'secret_sauce');

   // Ensure navigation was successful
   await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

   // Check if the product sort container is visible
   await expect(page.locator('[data-test="product-sort-container"]')).toBeVisible();

   // Sorting by Low to High Price
   await page.locator('[data-test="product-sort-container"]').selectOption('lohi'); // Select "Price (low to high)"
   await expect(page.locator('[data-test="product-sort-container"]')).toHaveValue('lohi');

   // Retrieve product prices (convert from text to number)
   const productPricesLowToHigh = await page.$$eval('.inventory_item_price', 
       elements => elements.map(element => parseFloat(element.textContent.replace('$', ''))));

   console.log("Product Prices (Low to High):", productPricesLowToHigh); // Log prices for verification

   // Verify prices are sorted in ascending order
   const sortedPricesLowToHigh = [...productPricesLowToHigh].sort((a, b) => a - b);
   expect(productPricesLowToHigh).toEqual(sortedPricesLowToHigh);

   //Sorting by High to Low Price
   await page.locator('[data-test="product-sort-container"]').selectOption('hilo'); // Select "Price (high to low)"
   await expect(page.locator('[data-test="product-sort-container"]')).toHaveValue('hilo');

   // Retrieve product prices again after sorting change
   const productPricesHighToLow = await page.$$eval('.inventory_item_price', 
       elements => elements.map(element => parseFloat(element.textContent.replace('$', ''))));

   console.log("Product Prices (High to Low):", productPricesHighToLow); // Log prices after sorting change

   // Verify prices are sorted in descending order
   const sortedPricesHighToLow = [...productPricesHighToLow].sort((a, b) => b - a);
   expect(productPricesHighToLow).toEqual(sortedPricesHighToLow);

   // Close the page
   await page.close();
});
