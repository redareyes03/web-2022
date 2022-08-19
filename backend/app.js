const express = require('express');
const app = express();
const db = require('./db');

const { mensajes } = require('./routes/routes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/inbox', mensajes)


app.listen(3000)