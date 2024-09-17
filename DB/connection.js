const mongoose = require('mongoose')
const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(() => {
    console.log("mongoDB Atlas successfully connected with shserver")
}).catch((err) => {
    console.log(`mongoDB connection failed!! error:${err}`);
})