const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(cors({}));

app.use(routes);
// Middleware que formata a mensagem de erro.
app.use(errors());

module.exports = app;