/*
Determinar con un loop/ciclo en el array de personas cuantas 
son mayores de edad y cuantas menores de edad, adicional decir 
el total de personas que compone el array.
*/

let personas = [{
        nombre: "foo",
        edad: 18
    },
    {
        nombre: "bar",
        edad: 17
    },
    {
        nombre: "zap",
        edad: 40
    },
    {
        nombre: "qux",
        edad: 15
    }
];


personas.map((personas)=>{
    if (personas.edad >= 18){
        console.log(`${personas.nombre} es mayor de edad`);
        console.log("=".repeat(50));

    }else{
        console.log(`${personas.nombre} es menor de edad`);
        console.log("=".repeat(50));

    }
});



let cuantasPersonas = personas.length;
console.log("el numero de personas en la lista es " + cuantasPersonas);
console.log("=".repeat(50));

var mayores = 0;
var menores = 0; 
let m = 0;
    for( ;m <= 3; m++ ){
        if(personas[m].edad >= 18){
            mayores++;
            
                }else{
                    menores++;
                  

                }
};
console.log("El total de mayores es " + mayores,
    "y el de menores es " + menores,
);
console.log("=".repeat(50));
