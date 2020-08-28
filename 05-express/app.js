const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}));

// Adding middleware before app runs
// third argument "next" is needed 
// app.use((req, res, next) => {
//     console.log('In the middleware');
//     next(); // Allows the request to continue to next middleware
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// const server = http.createServer(app);
// server.listen(3000);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not Found</h1>');
})

app.listen(3000); // shortcut to creating a server