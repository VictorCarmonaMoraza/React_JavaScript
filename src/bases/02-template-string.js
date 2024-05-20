

const nombre = 'Fernando';
const apellido = 'Herrera';

const nombreCompleto='Hola '+nombre + ' ' + apellido;
const nombreCompleto2=` Hola ${nombre} 
${apellido}`;
console.log("Forma1---->",nombreCompleto);
console.log("Forma2---->",nombreCompleto2);

function getSaludo(nombre){
    return 'Hola '+nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);