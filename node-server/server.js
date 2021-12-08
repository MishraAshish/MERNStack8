const express = require('express'); // imported express module or top level class of express
const port = 9090;
const app = express(); //by invoking top level class we are initilizing the application
const router = require('./route/router');
const adminRouter = require('./route/adminRouter');
const userRouter = require('./route/userRouter');

const adminApp = express();
const userApp = express();

app.use('/static', express.static('public')); // serve static files like images css using static middle ware

app.use('/admin', adminApp);
adminApp.use('/', adminRouter);

app.use('/user', userApp);
userApp.use('/', userRouter);

app.use('/', router); // all the requests coming to express app are routed to router.js

console.log(`we are listening on port ${port} with url http://localhost:9090`)
app.listen(port)