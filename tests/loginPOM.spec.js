import {test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('LoginTest', ()=>{

test ('loginStandard_user', async ({page}) =>{

   //Initialize the login page
   const login = new LoginPage(page)

   //Call url page
   await login.gotoLoginPage() //hover and command + click directs you back to LoginPage (cntrl click on window)

   //username and password
   await login.login('standard_user', 'secret_sauce')

   //Check if the title of the page is 'Swag Labs' after login
   await expect(page).toHaveTitle('Swag Labs');
})

test ('loginProblem_user', async ({page}) =>{

   //Initialize the login page
   const login = new LoginPage(page)

   //Call url page
   await login.gotoLoginPage() 

   //username and password
   await login.login('problem_user', 'secret_sauce')

  //Check if the title of the page is 'Swag Labs' after login
   await expect(page).toHaveTitle('Swag Labs');
})
})