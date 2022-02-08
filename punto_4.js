/*
Este string "fooziman" se debe proyectar de la siguiente forma "fOozimAn" 
NOTA: con la segunda letra en upper y la ante  penúltima en upper.
*/

let str = "fooziman";
let otroStr = [...str];

otroStr[1]= otroStr[1].toUpperCase();
otroStr[6]= otroStr[6].toUpperCase();

let capitalized = otroStr.join("");

console.log(capitalized);


console.log(`${str[0]}${str[1].toUpperCase()}${str[2]}${str[3]}${str[4]}${str[5]}${str[6].toUpperCase()}${str[7]}`);

