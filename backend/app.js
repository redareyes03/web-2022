const express = require('express');
const app = express();
const db = require('./db');
const cors = require('cors')

const { mensajes } = require('./routes/routes')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/inbox', mensajes)


app.listen(3001)