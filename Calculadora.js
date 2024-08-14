let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

function calcularPromedio (nota1, nota2, nota3, nota4){
    let promedio = parseInt(nota1 +  nota2 +  nota3 +  nota4)/4
    return promedio;
}

function verificarAprobacion(promedio){
    return promedio >= 5 ? "Aprobado" : "Reprobado";
}

function calcularDoble(numero) {
    return numero * 2;
  }
  
//Ejercicio para calcular el doble y el tripla de un numero
function calcularTriple(numero) {
    return numero * 3;
  }
  
  const numero = 5;
  const doble = calcularDoble(numero);
  const triple = calcularTriple(numero);
  
  console.log(`El doble de ${numero} es ${doble} y el triple es ${triple}.`);





  