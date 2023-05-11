
const express = require ("express");

const app = express();
const roomsRoute= require('./routes/roomsRoute');
const usersRoute= require ('./routes/usersRoute')

app.use('/api/rooms', roomsRoute);
app.use(express.json());
app.use('/api/users' , usersRoute)

const dbConfig =require ('./db');

const port =process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port using nodemon ${port} `));