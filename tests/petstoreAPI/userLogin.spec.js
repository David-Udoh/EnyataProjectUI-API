import {test, expect } from '@playwright/test'

test ('User login', async ({request})=>{

    const url = 'https://petstore.swagger.io/v2/user/login?username=caveman&password=c@vem@n02'
    const response = await request.get(url)

    console.log(await response.json())
    expect(response.status()).toBe(200)
})
