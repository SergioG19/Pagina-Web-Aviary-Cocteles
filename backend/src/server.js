const express = require('express'); 
const cors = require('cors'); 
 
const app = express(); 
 
app.set('port', process.env.PORT || 4000); 
 
// ================ MIDDLEWARES ================ 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
app.use(cors()); 
 
// ================= ROUTES ==================== 
const contactanosRoute = require('./routes/contactanos'); 
 
// ================= ENDPOINTS ==================== 
app.use('/contactanos', contactanosRoute); 
 
module.exports = app;
