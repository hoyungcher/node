const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('homepage');
    res.send('<h1>Welcome to my shop</h1>');
});

module.exports = router;