const express = require('express'); 
const router = express.Router(); 
const controller = require('../controllers/contactanos-c'); 
 
// Enviar formulario POST 
router.post('/', (req, res) => { 
  controller.enviarFormulario(req, res); 
}) 
 
module.exports = router;
