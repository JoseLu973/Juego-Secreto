
// 1.Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros 
//   y peso en kilogramos, que se recibirán como parámetros.

let altura = 170;
let peso = 100;

function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}
  let imc = peso / (altura * altura); 
  console.log ('El IMC es de '+ (imc));

// 2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.

  function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);

  // Crea una función que convierta un valor en dólares ($ 4050), pasado como parámetro, y devuelva el valor equivalente 
  // en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la 
  // cotización del dólar igual a R$4,80.

  function convertirDolaresAREales(dolares){
     var cotizacionDolar = 4.80;
     var reales = dolares * cotizacionDolar;
     return reales;
  }
  // ejemplo de uso
  let valorEnDolar = 90;
  let valorEnReales = convertirDolaresAREales(valorEnDolar);
  console.log(`${valorEnDolar} dólares son R$ ${valorEnReales} reales.`); 

  //4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y
  //la anchura que se proporcionarán como parámetros.

  let alto = 100;
  let ancho = 200;
function calcularPerimetroSala(alto, ancho) { 
}
  let area = ancho * alto;
  let perimetro = 2*(alto + ancho);
  console.log ('El Perimetro es de '+ (perimetro));
  console.log ('El area es de '+ (area));


  function calcularAreaYPerimetroRectangular(h, anchura) {
    var area = h * anchura;
    var perimetro = 2 * (h + anchura);
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }
  // Ejemplo de uso
  let h = 100; // en metros
  let anchura = 200; // en metros
  calcularAreaYPerimetroRectangular(h, anchura);

  //5.Cree una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se
  //proporcionará como parámetro. Considere Pi = 3,14.

  function calcularAreaYPerimetroSala(radio){
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log("El Area es de: " + area);
    console.log("El perimetro es de: " + perimetro);
  }
  let radio = 8;
  calcularAreaYPerimetroSala(radio);

// 6.Cree una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
  function mostrarTablaDeMultiplicar(número) {
    console.log(`Tabla de multiplicar del ${número}:`);
    for (var i = 1; i <= 10; i++) {
      var resultado = número * i;
      console.log(número + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  let número = 7;
  mostrarTablaDeMultiplicar(número);