//1. import dotenv pakage
require('dotenv').config()

// import connection file mongo
require('./DB-Connection/connection')

//2. import express
const express=require('express')

// import router
const router=require('./Routes/router')

// 3. import cors
const cors=require('cors')

// 4. create server using express
const emsServer=express()

//5. use cors in server
emsServer.use(cors())

// 6. parse json data in server
emsServer.use(express.json())

// user router in server
emsServer.use(router)

// to show profile by using url we use a method called static
emsServer.use('/uploads',express.static("./uploads"))

// 7. customize port for server
const PORT=4000||process.env.PORT
// ||process.env.PORT means it provide a free port from env

// 8. run server application
emsServer.listen(PORT,()=>{
    console.log(`ems server started at the port:${PORT}`);
})

// emsServer.post('/',(req,res)=>{
//     res.send(`<h1>ems server started at port 4000 </h1>`)
// })