//Desestructuracion 
//Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { nombre, edad, clave } = persona;


console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

console.log(nombre);
console.log(edad);
console.log(clave);

//Desescruturacion de objeto
const retornaPersona = (usuario) => {
    
    const { nombre, edad, clave } = usuario;
    console.log(nombre, edad, clave);
}

//Desestructuracion de argumentos
const retornaPersona2 = ({nombre,edad}) => {
    
    
    console.log(nombre, edad);
}

//Desestructuracion de argumentos y agreamos argumento que no esta en el objeto
const retornaPersona3 = ({nombre,edad, rango='Capitan'}) => {
    
    console.log(nombre, edad,rango);
}

//Desestructuracion de argumentos y agreamos argumento que no esta en el objeto
const ContextP = ({clave,nombre,edad, rango='Capitan'}) => {
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1232,
            lng: -12.3232
        
        }
    }
}

retornaPersona(persona);
retornaPersona2(persona);
retornaPersona3(persona);

const {nombreClave, anios, latlng:{lat, lng}} = ContextP(persona);
console.log(nombreClave, anios);
console.log(lat, lng);


//const {nombreClave, anios, latlng} = ContextP(persona);
//const {lat, lng} = latlng;

























