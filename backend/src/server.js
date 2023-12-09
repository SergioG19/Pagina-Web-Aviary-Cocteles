const express = require('express');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 4000);

// ================ MIDDLEWARES ================
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

module.exports = app;