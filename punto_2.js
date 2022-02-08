/*
https://jsonplaceholder.typicode.com/users 

Mediante la anterior url, se debe acceder al endpoint /users 
para mostrar todos los usuarios, con el uso de la librería axios, 
se debe hacer 2 diseños de consumo de este recurso. 

1 consumirlo con promesas es decir con then(...).catch(...)
2 consumirlo con el formato de diseño async / await

docs:

https://github.com/axios/axios

npm install axios
*/
const axios = require("axios");

// Promesas Then y cacth
function getUsers1(){  
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
        console.log(response.data);

    }).catch(function(error){
        console.log(error);
    })
}

getUsers1();

// Diseño aync / await

async function getUsers2(){
    try{
        const users = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(users.data)
    
    }catch(error){
        console.log(error);
    }

}

getUsers1();