# Practicing with useState and useEffect

Fetching data from `useEffect` hook and using it to update some state in a pattern that you'll be using many times in React. 
1. In the `useEffect` function, use axios to make a GET request to the url specified by the URL variable. This request will return an array of user objects.
2. Take the response from the request and use it to update the `user` piece of state with the `setUsers` function

N.B.
1. Remember, you cannot use the async/await syntax directly on the function that is passed to `useEffect`. If you want to use async/await, then define a new function inside of `useEffect`, mark it as async, then call it manually.
2. Make the request to fetch the list of users with `axios.get(URL);`
3. Remember that when you make a request with axios, you get a 'response' object. The actual data that was sent back to you is available on the `data property` of that object

Step 1 - Adding Axios to a Project
`$ npm install axios`

Step 2 - Import Axios
`import axios from 'axios';`
