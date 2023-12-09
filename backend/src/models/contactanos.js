const { Schema, model } = require('mongoose'); 
 
const contactanosEsquema = new Schema({ 
  nombre: { 
    type: String, 
    required: true 
  }, 
  cedula: { 
    type: Number, 
    required: true 
  }, 
  email: { 
    type: String, 
    required: true 
  }, 
  telefono: { 
    type: String, 
    required: true 
  }, 
  fecha_nac: { 
    type: String, 
    required: true 
  }, 
  imagen: { 
    type: String, 
    required: true 
  }, 
  genero: { 
    type: String, 
    required: true 
  }, 
  mensaje: { 
    type: String, 
    required: true 
  }, 
}, { 
  timestamps: true 
}); 
 
// Crear el modelo de usuario 
const contactanos = model('contactanos', contactanosEsquema); 
 
// Exportar el modelo de usuario 
module.exports = contactanos;
