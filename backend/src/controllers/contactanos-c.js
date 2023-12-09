
const contactanos = require('../models/contactanos'); 
 
class ContactanosController { 
  async enviarFormulario(req, res) { 
    try { 
      const { nombre, cedula, email, telefono, fecha_nac, imagen, genero, mensaje } = req.body; 
      const nuevoFormulario = new contactanos({ nombre, cedula, email, telefono, fecha_nac, imagen, genero, mensaje }); 
      await nuevoFormulario.save(); 
      res.json({respuesta: 'Mensaje enviado exitosamente. Gracias por comunicarte con nosotros'}); 
    } catch (error) { 
      console.log(`Error ${error}`); 
      res.status(500).render('404', { respuesta: 'Error al enviar el formulario' }) 
    } 
  }; 
} 
 
const contactanosC = new ContactanosController(); 
 
module.exports = contactanosC;
