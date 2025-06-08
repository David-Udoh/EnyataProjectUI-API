import {test, expect } from '@playwright/test'

test ('Delete user', async ({request})=>{

    const url = 'https://petstore.swagger.io/v2/user/thespecialone'
    const response = await request.get(url)

    console.log(await response.json())
    expect(response.status()).toBe(200)
})