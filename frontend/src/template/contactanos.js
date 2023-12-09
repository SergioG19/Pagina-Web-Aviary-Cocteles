const formulario = document.getElementById("form");
const SERVIDOR = `http://localhost:4000/contactanos`

formulario.addEventListener("submit", async e => {
  e.preventDefault();
  let resultado = "";

  const nombre = e.target.Name.value;
  const cedula = Number(e.target.ID.value);
  const email = e.target.Email.value;
  const telefono = e.target.Phone.value;
  const fecha_nac = e.target.Date.value;
  const imagen = e.target.File.value;
  const opciones = e.target.gender;
  let genero = "";
  
  if (opciones[0].checked){
    genero = "Masculino"
  }
  if (opciones[1].checked){
    genero = "Femenino"
  }
  if (opciones[2].checked){
    genero = "Prefiero no decir"
  }

  const mensaje = e.target.Message.value;

  await fetch (`${SERVIDOR}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'nombre': nombre,
      'cedula': cedula,
      'email': email,
      'telefono': telefono,
      'fecha_nac': fecha_nac,
      'imagen': imagen,
      'genero': genero,
      'mensaje': mensaje,
    })
  }).then(res => res.json())
    .then(response => {
      resultado = response.respuesta;
    })
    .catch(err => {
      resultado = err.respuesta
    })
    .finally(()=>{
      window.alert(resultado);
      console.log(resultado);
    })


  //console.log([nombre, cedula, email, telefono, fecha_nac, imagen, genero, mensaje]);
});

export default contactanos;