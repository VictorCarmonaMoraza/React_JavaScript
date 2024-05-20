
//Arreglo de 100 elementos vacios (undefined
const arreglo = new Array(100);
arreglo.push(1); //No se debe de usar push, ya que se modifica el arreglo


const arreglo2 = [1, 2, 3, 4];
// arreglo2.push(1);

// for(let i=0; i<5; i++){
//     arreglo2[i]=i;
// }

//El spread operator es una forma de clonar un arreglo y agregarle un nuevo elemento
let arreglo3 = [...arreglo2, 5];

console.log(arreglo2);
console.log(arreglo3);



//Los arreglos si muestran en consola con llaves cuadradas
console.log(arreglo);

//Esta funcion callback se ejecuta por cada elemento del arreglo
const arreglo4 = arreglo2.map(function(numero){
    //return `Hola ${numero * 2}`;
    return numero * 2;
});

console.log(arreglo4);