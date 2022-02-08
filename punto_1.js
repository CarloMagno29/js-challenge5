/*
Se tiene creado un objeto, en el cual se desea agregar 2 propiedades
dentro de su prototipo, las propiedades son: edad: 300, pais:"narnia"
*/

let persona = {
    nombre: "foo",
    olor: "bueno",
    __proto__:{
        edad:300,
        pais:"narnia"
    }

};


console.log(persona, persona.__proto__);



