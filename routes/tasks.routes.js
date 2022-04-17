// CRUD de las tareas

const express = require('express');


const router =  express.Router()

// rutas de las tareas -> http://localhost:3000/api/tasks
router.get('/', (req, res) => {
  res.send('Hola')
})


module.exports = router
