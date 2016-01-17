//Obtención de las Librerias
var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

//Funcion de creación random del JSON
var generarUsuario = function(){
  var randomID = faker.random.uuid();
  var randomName = faker.name.findName();
  var randomContent = faker.lorem.sentence();
  var randomDate = faker.date.past();
  var randomImage = faker.image.image();
  return {
    id: randomID,
    nombre: randomName,
    contenido: randomContent,
    fecha: randomDate,
    imagen: randomImage
  }

}

//Home
app.get('/', function (req, res) {
  res.send('Aprendiendo NodeJS en CoreUpgrade :D');
})

//Endpoint: Posts
app.get('/posts', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})


//Enpoint: Posts2
app.get('/posts2', function (req, res) {
  var cant = _.random(1,15)
  var users = _.times(cant, generarUsuario)
  res.json(users);
})


app.listen(3000);
                