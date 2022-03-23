// Main file - starts the server

// LIBRARY IMPORTS
const express = require('express'); //backend framework
const os = require('os'); // used to extract out-facing IP from OS

// OWN IMPORTS
const {testDb} = require('./database/init'); // ran when starting server to test
const {createTables} = require('./database/construct'); // resets db and seeds dummy data

const server = express();
const port = 3000;
// MIDDLEWARE
server.use(express.json()); // json parser
server.use(express.urlencoded({ extended: false })); // URL parser

const networkInterfaces = os.networkInterfaces();

testDb();
createTables() // resets db and seeds dummy data

// start server
server.listen(port, () => {
  let ipAddress = networkInterfaces['Wi-Fi'].find(con => con.family === 'IPv4')['address'];
  console.log(`Server running at http://${ipAddress}:${port}`);
});

server.get('/', function (req, res) {
  res.status(418).send("Hello World")
})

// ROUTING
const userRouter = require('./routes/users')
server.use('/users', userRouter)

const courseRouter = require('./routes/courses')
server.use('/courses', courseRouter)
