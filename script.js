let xhr = new XMLHttpRequest
//"text" - "json" - "blob" - "arraybuffer"
xhr.responseType = "json"
xhr.open("GET","https://jsonplaceholder.typicode.com/users")
xhr.addEventListener("load",()=>{
    if (xhr.status == 200) {
        console.log(typeof xhr.response)
        //let respuesta = JSON.parse(xhr.response)
        console.table(xhr.response)
    }
})
xhr.send()

//Literal : value - writable(true) - configurable(true) - enumerable(true) 
let obj = {x:1,y:2}

let obj_restrict = {}

Object.defineProperty(obj_restrict,"x",{
    value : 1,
    writable : true,
    configurable : true,
    enumerable : true
})

Object.defineProperty(obj_restrict,"y",{
    value : 1,
    writable : true,
    configurable : true,
    enumerable : false
})

//Object.key(Object) => Array - Nos devuelve un array con todos los indices del objeto
/* 
Object.keys(obj).forEach((llave,valor)=>{
    console.log(llave,valor)
}) 
*/

//for...in : Nos permite iterar sobre las propiedades de un objeto dinamicas y/o que hayan sido configuradas como iterables. Este bucle tambien puede iterar sobre propiedades dinamicas dentro de la cadena de prototipos 
/* 

for(let prop in obj){
    console.log(prop)
} 

*/

/*
typeof ""               "string"
typeof 1                "number"
typeof true             "boolean"
typeof function foo(){} "function"
typeof undefined        "undefined"

typeof null             "object"

typeof []               "object"
typeof {}               "object"


Array.isArray(Any) => Boolean - determina si un valor es un array o no

*/

