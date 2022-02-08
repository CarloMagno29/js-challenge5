/*
Hay 2 Objetos: Can y Perro, que deben ser transformados en un esquema de clases,
donde la clase Perro herede las propiedades y funciones de la clase Can y mostrar
todo el perfil del Perro por pantalla / terminal.
*/

/*let Can = {
    ladra: true,
    cantidadDePatas: 4,
    correr() {
        return "corriendo";
    },
    salta() {
        return "saltando"
    }
};


let Perro = {
    nombre: "tornado",
};*/

class can {
   
    constructor(ladra, cantidadePatas, corre, salta){
    this.ladra= true;
    this.cantidadePatas= 4;
    this.corre= function correr(){
        return "corriendo";
    };
    this.salta = function saltar(){
        return "saltando";
    };
 }
};

//const perro1 = new can();

class perro extends can{
    constructor(ladra,cantidadDePatas,corre,salta,nombre){
        super(ladra,cantidadDePatas,corre,salta)
        this.nombre = "tornado"; 
    }
}

let tornado = new perro();

console.log(tornado);

