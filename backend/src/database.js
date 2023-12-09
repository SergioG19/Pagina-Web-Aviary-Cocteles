const mongoose = require("mongoose");

const { MongoDBHOST, MongoDB_DB } = process.env;

const MONGODB_URL = `mongodb://${MongoDBHOST}/${MongoDB_DB}`;

mongoose.connect(MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => console.log("Base de Datos conectada"))
  .catch(err => console.log(err));