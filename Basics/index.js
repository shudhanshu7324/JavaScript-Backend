require('dotenv').config()
const express = require('express')
const app = express()
const Port = 4000

app.get('/', (request,response) => {
    response.send("Hello World")
})

app.get('/login', (request,response) => {
    response.send("Login to Page")
})


app.listen(process.env.PORT, () => {
    console.log(`Server is running on Port ${process.env.PORT}`);
})