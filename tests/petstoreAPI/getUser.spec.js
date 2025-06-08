import {test, expect } from '@playwright/test'

test ('Get User', async ({request})=>{

    const url = 'https://petstore.swagger.io/v2/user/caveman'
    const response = await request.get(url)

    console.log(await response.json())
    expect(response.status()).toBe(200)

    // Parse the json response body to assert that id from json body is 10
    const responseBody = await response.json()
    expect(responseBody.id).toBe(10)

    expect(responseBody.username).toBe("caveman");
    expect(responseBody.email).toBe("Big_conc@gmail.com");
    expect(responseBody.password).toBe("c@vem@n02");
    expect(responseBody.userStatus).toBe(1);
})
