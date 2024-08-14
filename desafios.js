 // Crea una función que muestra "¡Hola, mundo!" en la consola.
 function mostrarMensaje() {
   console.log('¡Hola Mundo!');
}
mostrarMensaje();

//Crear una función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola.
function mostrarHolaNombre(nombre) {
    console.log(`¡Hola ${nombre}, como estas!`);
  }
  mostrarHolaNombre("Alice");

// Cree una función que reciba un número como parámetro y devuelva el doble de ese número.
  function calcularDoble(numero) {
    return numero * 2;
  }
  let resultadoDoble = calcularDoble(5);
  console.log(resultadoDoble);

// Cree una función que reciba tres números como parámetros y devuelva su promedio.
  function calcularPromedio(a, b, c) {
    return (a + b + c) / 3;
  }
  let promedio = calcularPromedio(4, 7, 10);
  console.log(promedio);

// Cree una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function encontrarMayor(a, b) {
    return a > b ? a : b;
  }
  let numeroMayor = encontrarMayor(15, 9);
  console.log(numeroMayor);
  
// Cree una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function cuadrado(numero) {
    return numero * numero;
  }
  let resultado = cuadrado(4);
  console.log(resultado);
