function saludar() {
  console.log("Hola");
}

saludar();

function SaludoPersonal(nombre, apellido) {
  return ("Hola " + nombre + " - " + apellido);
}

let saludo = SaludoPersonal("Daniel", "Rodriguez");
alert(saludo);
console.log(saludo);
document.write(saludo);

// function SaludoPersonal2(nombre, apellido) {
//   alert("Hola " + nombre + " - " + apellido);
// }

// SaludoPersonal2("Pablo", "Perez");

const funcion = function () {
  console.log("Hola 2");
}

funcion();

const funcionFlecha = (nombre) => {
  console.log("Hola desde funcion flecha " + nombre);
}

funcionFlecha("Walter");

let encuentra = 'flor';
let bonita = false;
if (encuentra == 'flor') {
  if (bonita == true){
    console.log("Encontre una flor bonita");
  }
} else{
  console.log("Recolectar miel");
}