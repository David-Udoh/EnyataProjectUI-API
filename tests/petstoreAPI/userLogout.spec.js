import {test, expect } from '@playwright/test'

test ('User logout', async ({request})=>{

    const url = 'https://petstore.swagger.io/v2/user/logout'
    const response = await request.get(url)

    console.log(await response.json())
    expect(response.status()).toBe(200)
})