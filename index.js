const express = require('express');
const routerApi = require('./routes');
const app = express();
const port  = 3000
// primer parametro es el path, el segundo parametro es una función
// app.get('/:id', (req, res) => {
//   res.send(`${req.params.id} gol`)
// })

//transformar la data en JSON'S
app.use(express.json())

// rutas
routerApi(app)

// puerto del servidor
app.listen(port, () => {
  console.log(`Mi puerto es el ${port}`)
})

// app.listen(3000)
