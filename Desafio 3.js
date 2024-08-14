//1. Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

//2. Crea una lista de lenguajes de programación llamada lenguajesDeProgramacion.
let lenguajesDeProgramacion = ['javaScript' , 'C++', 'Python', 'Css'];

//3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarElementosDeLaListaPorSeparado () {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i]);
      }
}
mostrarElementosDeLaListaPorSeparado();

//5. Crea una función que muestre en la consola todos los elementos de la lista idiomasDeProgramación de manera inversa.
function mostrarLenguagesReversoSeparadamente() {
  for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguajesDeProgramacion[i]);
  }
}
mostrarLenguagesReversoSeparadamente();

//6. Crea una función que calcula la media de los elementos en una lista de números.
function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
  }
  
  let numeros = [10, 20, 30, 40, 50];
  let media = calcularMedia(numeros);
  console.log('La Média es:', media);

//7. Crea una función que muestre en la consola el número mayor y menor en una lista.
  function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
     if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('El numero Mayor es:', mayor);
    console.log('El numero Menor es:', menor);
  }
  
  let numero = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numero);

  //8. Crea una función que retorna la suma de todos los elementos en una lista.
  function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma;
  }
  
  let numeroso = [15, 8, 25, 5, 12];
  let suma = calcularSuma(numeroso);
  console.log('Suma:', suma);

  //9. Crea una función que recibe una lista como parámetro y retorna el índice de un elemento también pasado como parámetro. 
  //Si ese elemento no existe en la lista, retorna -1.
  function encontrarIndiceElemento(lista, elemento) {  
  for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }
