//importar dependencia
const express = require("express");
const path = require("path");
const pages = require('./pages.js')


//iniciando o express
const server = express();
server
  //utilizando aruqivos estaticos
  .use(express.static("public"))

  // configurar template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs");

//rotas da aplicacao
server.get('/', pages.index)
server.get('/orphanage', pages.orphanage)
server.get('/orphanages', pages.orphanages)
server.get('/create-orphanage', pages.createOrphanage)
//ligar o servior

server.listen(5500);
