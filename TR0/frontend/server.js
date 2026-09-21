const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Importem la llibreria per generar IDs únics
const { v4: uuidv4 } = require('uuid');

//Importem els JSON amb les preguntes i respostes
const preguntes = require('../backend/preguntes.json');
const respostes = require('../backend/respuestas.json');

//Variable para guardar las sesiones
const sessions = new Map();

app.get('/preguntes', (req, res) => {
  //Genera la partida
  const sessionId = uuidv4();
  console.log(`Partida Iniciada ID de la sessió: ${sessionId}`);

  //Barajar las preguntas
  const totesLesPreguntes = preguntes.preguntes_client;
  const preguntesMezclades = [...totesLesPreguntes].sort(() => Math.random() - 0.5);
  
  //Se seleccionan 10 preguntas
  const preguntesSeleccionades = preguntesMezclades.slice(0, 10);

  //Usamos .map() para recorrer el array y quedarnos solo el id de las 10 preguntas.
  const idsSeleccionats = preguntesSeleccionades.map(p => p.id);

  //Guardem la sessió al map
  sessions.set(sessionId, {
    questions: idsSeleccionats
  });

  // Mostramos por consola que se ha guardado correctamente
  if (sessions.has(sessionId)) {
    console.log("Sessió guardada correctament al servidor:", sessions.get(sessionId));
  }

  //Por seguridad filtraremos las preguntas para que solo se envien los campos permitidos
  const clientQuestions = preguntesSeleccionades.map(q => ({
    id: q.id,
    pregunta: q.pregunta,
    opcions: q.opcions,
    imatge: q.imatge
  }));

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