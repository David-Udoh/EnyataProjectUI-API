import {test, expect } from '@playwright/test'

test ('Post User', async ({request})=>{

  // New User is created with data and headers. 
const response = await request.post('https://petstore.swagger.io/v2/user/createWithArray', 
    { 
    data: [
       {
    "id": 22,
    "username": "man-united",
    "firstName": "Ferguson",
    "lastName": "Alex",
    "email": "alex-ferg@gmail.com",
    "password": "@lex0real",
    "phone": "2349666666666",
    "userStatus": 1
    },
      {
    "id": 20,
    "username": "arsenal",
    "firstName": "Arsene",
    "lastName": "Wenger",
    "email": "arse-wenger@gmail.com",
    "password": "gunn@rs",
    "phone": "2349777777777",
    "userStatus": 0
    }
  ],
    headers:{'Content-type': 'application/json; charset=UTF-8',}
  })

    // Parse the JSON response body
    const responseBody = await response.json();

    // Log the response for debugging
    console.log(responseBody);

    // Assert the response status code
    expect(response.status()).toBe(200);

    // Assert the response header
    const responseHeaders = response.headers()
    expect(responseHeaders['content-type']).toContain('application/json')

     // Assertions that title from json body is 'please use english'
    expect(responseBody.message).toBe("ok");
    }) 