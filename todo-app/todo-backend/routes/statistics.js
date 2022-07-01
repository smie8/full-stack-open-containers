const express = require('express');
const router = express.Router();
const redis = require('../redis')

/* GET index data. */
router.get('/', async (req, res) => {
  const added_todos = await redis.getAsync("added_todos")
  if (added_todos === null) await redis.setAsync("added_todos", 0)

  res.send({ added_todos });
});

module.exports = router;