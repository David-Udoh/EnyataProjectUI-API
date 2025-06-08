import {test, expect } from '@playwright/test'

test ('Post User', async ({request})=>{

  // New User is created with data and headers. 
const response = await request.post('https://petstore.swagger.io/v2/user', 
    { 
    data: {
    "id": 10,
    "username": "caveman",
    "firstName": "Bigcave",
    "lastName": "Conc",
    "email": "Big_conc@gmail.com",
    "password": "c@vem@n02",
    "phone": "2349056156156",
    "userStatus": 1
    },
    headers:{'Content-type': 'application/json; charset=UTF-8',}
  })

    // Parse the JSON response body
    const responseBody = await response.json();

    // Log the response for debugging
    console.log(responseBody);

    // Assert the response status code
    expect(response.status()).toBe(200);
    
    // Assertions that title from json body is 'please use english'
    expect(responseBody.message).toBe("10");

    // Assert the response header
    const responseHeaders = response.headers()
    expect(responseHeaders['content-type']).toContain('application/json')
    }) 

