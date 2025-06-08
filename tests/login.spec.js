import { test, expect } from '@playwright/test';

test('login standard_user', async ({ page }) => {

  // Navigate to the specified URL
  await page.goto('https://www.saucedemo.com/');

  // Get the title of the page and log it
  let pageTitle = await page.title();
  console.log('Page title is:', pageTitle);

  // Check if the title of the page is 'Swag Labs'
  await expect(page).toHaveTitle('Swag Labs');

  // Fill the username and password fields and click the login button
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Update the page title after login and log it
  console.log('Page title is:', pageTitle);

  // Check if the title of the page is 'Swag Labs' after login
  await expect(page).toHaveTitle('Swag Labs');

})

test('login problem_user', async ({ page }) => {

  // Navigate to the specified URL
  await page.goto('https://www.saucedemo.com/');

  // Get the title of the page and log it
  let pageTitle = await page.title();
  console.log('Page title is:', pageTitle);

  // Check if the title of the page is 'Swag Labs'
  await expect(page).toHaveTitle('Swag Labs');

  // Fill the username and password fields and click the login button
  await page.locator('[data-test="username"]').fill('problem_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Update the page title after login and log it
  console.log('Page title is:', pageTitle);

  // Check if the title of the page is 'Swag Labs' after login
  await expect(page).toHaveTitle('Swag Labs');

})