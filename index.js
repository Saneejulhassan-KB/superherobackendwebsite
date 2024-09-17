require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');



const cors = require('cors')
require('./DB/connection')
const router = require('./Router/Router')


const shServer = express()

shServer.use(cors())
shServer.use(express.json());

shServer.use(router)


const PORT = 3000 || process.env.PORT

shServer.listen(PORT, () => {
    console.log(`sh-Server started listening at PORT:${PORT}, and waiting for the client request`);
})

shServer.get('/', (req, res) => {
    res.send(`<h1>super-hero server started and waiting for the client request</h1>`)
})

