const express = require('express')
const app = express();
const PORT = 8080;
const routesProducts = require('./routes/routesProducts')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/productos', routesProducts)
app.use(express.static(__dirname + '/public'));

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})

server.on('error', (error) => console.log(error));
