'use strict';

const fs = require('fs');
const express = require('express');
const jsonParser = require('body-parser').json();
const router = express.Router();


router.post('', jsonParser, function (req, res) {

});

router.get('', function (req, res) {

});

router.get('', function (req, res) {

});



router.put('', jsonParser, (req, res) => {

});




// yo actually make a var that holds the value for email from the users model pass it through the url so the db can identify it and remove it thanks - love past ix.... :3

router.delete('/api/user/delete/:email', function (req, res) {

});