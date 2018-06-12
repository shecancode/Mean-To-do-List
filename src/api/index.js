'use strict';

const express = require('express');

const router = express.Router();


router.get('/todos', function(req, res, next){
  res.json({todos: []});
})

//TODO: Add Post route to create new entries

//TODO: Add PUT route to update existing entries

//TODO: Add DELETE route to delete entries

module.exports = router;