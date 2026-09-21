const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Importem la llibreria per generar IDs únics
const { v4: uuidv4 } = require('uuid');

//Importem els JSON amb les preguntes i respostes
const preguntes = require('../backend/preguntes.json');
const respostes = require('../backend/respuestas.json');

app.get('/preguntes', (req, res) => {
  //Genera la partida
  const sessionId = uuidv4();
  console.log(`Nova partida iniciada! ID de la sessió: ${sessionId}`);

  //Barajar las preguntas
  const totesLesPreguntes = preguntes.preguntes_client;
  const preguntesMezclades = [...totesLesPreguntes].sort(() => Math.random() - 0.5);
  
  //Se seleccionan 10 preguntas
  const preguntesSeleccionades = preguntesMezclades.slice(0, 10);

  //Se envian las preguntas y la ID de la sesion
  res.json({
    id_partida: sessionId,
    preguntes_client: preguntesSeleccionades
  });
});

app.get('/respostes', (req, res) => {
  res.json(respostes);
});

app.listen(port, () => {
  console.log(`Servidor funcionant a http://localhost:3000`);
});