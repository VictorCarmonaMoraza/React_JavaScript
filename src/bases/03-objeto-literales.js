const persona = {
    nombre: 'Toni',
    apellido: 'Garcia',
    edad: 45,
    direccion: {
        ciudad: 'Barcelona',
        zip: '08080',
        lat: 14.3232,
        lng: 34.923332
    }
};

//Forma1
console.log({persona:persona});
//Form2
console.log({persona});

//const persona2 = persona;

//persona2.nombre = 'Peter';

//console.log({persona2});

const persona3 = {...persona};
console.log({persona3});

