'use strict';

const express = require('express');
const router = express.Router();
const todos = require('../../mock/todos.json');


router.get('/todos', function(req, res, next){
  res.json({todos: todos});
})

//TODO: Add Post route to create new entries

//TODO: Add PUT route to update existing entries

//TODO: Add DELETE route to delete entries

module.exports = router;