
//Fucinoes JS
const saludar = function saludar(nombre) {
    return `Hola ${nombre}`;
}

//Funcio flecha1
const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
};

//Funcion flecha2
const saludar3 = nombre => `Hola ${nombre}`;



//console.log(saludar('Toni'));

console.log('saludar1', saludar);
console.log('saludar2', saludar2);
console.log('saludar3', saludar3);


const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}

const getUser2 = () =>
({
    uid: 'ABC123',
    username: 'El_Papi1502'
})


const user = getUser();
const user2 = getUser2();

console.log(getUser());


//Tarea
//1- Tranbsformar a una funcion de flecha
//2- Tiene que retornar un objeto implicito
//3- Pruebas
function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
}

const getUsuarioActivo2=(nombre)=>({
    uid: 'ABC567',
    username: nombre
})


const usuarioActivo = getUsuarioActivo('Toni');
const usuarioActivo2 = getUsuarioActivo2('Toni');   
console.log(usuarioActivo);
console.log(usuarioActivo2);