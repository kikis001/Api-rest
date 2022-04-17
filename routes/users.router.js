const express = require('express');

const router = express.Router()

router.post('/', (req, res) => {
  // crear usuarios
  res.send('Hola')
})

module.exports = router
