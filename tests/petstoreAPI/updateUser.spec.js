import {test, expect } from '@playwright/test'

test ('Post newUser', async ({request})=>{

  // New User is created with data and headers. 
const response = await request.post('https://petstore.swagger.io/v2/user', 
    { 
    data: {
    "id": 24,
    "username": "thespecialone",
    "firstName": "Mourinho",
    "lastName": "Jose",
    "email": "joseMourinho@gmail.com",
    "password": "speci@l1",
    "phone": "2349056156156",
    "userStatus": 0
    },
    headers:{'Content-type': 'application/json; charset=UTF-8',}
  })
})

test ('Update newUser', async ({request})=>{

  // New User is created with data and headers. 
const response = await request.put('https://petstore.swagger.io/v2/user/thespecialone', 
    { 
    data: {
    "id": 24,
    "username": "thespecialone",
    "firstName": "Mourinho",
    "lastName": "Jose",
    "email": "joseMourinho@gmail.com",
    "password": "D-speci@l1",
    "phone": "2349056156156",
    "userStatus": 1
    },
    headers:{'Content-type': 'application/json; charset=UTF-8',}
  })
})


