const express = require('express')
const tasksRouter = require('./tasks.routes')

function routerApi(app) {
  const router = express.Router()
  // url principal
  // http://localhost:3000/api
  app.use('/api', router)
  router.use('/tasks', tasksRouter)
}

module.exports = routerApi
