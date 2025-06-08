import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  await page.locator('[data-test="username"]').fill('standard_user');
 
  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

  await page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();

  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

  await page.close()
})