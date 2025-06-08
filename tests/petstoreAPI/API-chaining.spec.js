import { test, expect } from '@playwright/test'

test ('Petstore user flow', async ({request}) => {

    // CRUD create>read>update>delete
    // Construct data

    const baseurl = 'https://petstore.swagger.io/v2'

    const postContent = {
    "id": 23,
    "username": "neverwalkalone",
    "firstName": "Jurgen",
    "lastName": "klop",
    "email": "klopJurg@gmail.com",
    "password": "thereds11",
    "phone": "234900000000",
    "userStatus": 0
    }

    const putContent = {
    "id": 23,
    "username": "2025champions", //updating username
    "firstName": "Jurgen",
    "lastName": "klop",
    "email": "klopJurg@gmail.com",
    "password": "thereds11",
    "phone": "234900000000",
    "userStatus": 1 //updatin status
    }

    const headers = {'Content-type': 'application/json; charset=UTF-8'}

    const postOptions = {
        headers: headers,
        data: postContent
    }

    const putOptions = {
        headers: headers,
        data: putContent
    }

    // create a post
    const postRes = await request.post(baseurl + '/user', postOptions)
    console.log("Create Response:", await postRes.json()); //Log responsebody after  creating user
    expect(postRes.status()).toBe(200); // Check if the post was created successfully

    // read post
    const getRes = await request.get(baseurl + '/user/neverwalkalone')
    console.log("GET Response:", await getRes.json());
    expect(getRes.status()).toBe(200); // Check if the post was read successfully

    // update post
    const putRes = await request.put(baseurl + '/user/neverwalkalone', putOptions)
    console.log("PUT Response:", await putRes.json());
    expect(putRes.status()).toBe(200); // Check if the post was created successfully

    // delete post
    const delRes = await request.delete(baseurl + '/user/2025champions')
    console.log("DELETE Response:", await delRes.json());
    expect(delRes.status()).toBe(200); // Check if the post was created successfully
})