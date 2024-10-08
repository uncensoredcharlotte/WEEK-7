// import packages
const express = require('express')
const session= require('express-session')
const MySQLStore = require('connect-mysql2')(session)
const path= 
require('dotenv').config()


const db= require('./config/db')
const authRoutes= require('./routes/auth')

// initialize server
const app= express()

// set-up middleware
app.use(express.json ())

// set-up session
app.use(
    session({

        key: 'user_sid',
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: new MySQLStore({}, db)


    })
)


// routes
app.get('/', (req,res)=>{


})


app.use('./auth', authRoutes)

// start server
const port = process.env.port

app.listen(port, () => {
    console.log(` Server is running on http://localhost:${port}`)

})