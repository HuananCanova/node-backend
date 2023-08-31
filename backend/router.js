const express = require("express")
const router = require('./router')
const app = express();


router.get('/', (req, res ) => res.status(200).send('Hello World'));

module.exports = router;