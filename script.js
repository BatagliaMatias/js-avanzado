let progress = document.querySelector("progress")
let p = document.querySelector("p")
let youtube = document.querySelector("#youtube")

let xhr = new XMLHttpRequest
//"text" - "json" - "blob" - "arraybuffer"
xhr.responseType = "blob"
//xhr.open("GET","https://jsonplaceholder.typicode.com/users")
xhr.open("GET","imagen.jpg")


//progress : Se dispara cuando el objeto XHR esta en readyState = 3 
xhr.addEventListener("progress", e=>{
    //ProgressEvent.lengthComputable = Boolean 
    //ProgressEvent.total = Number - 
    //ProgressEvent.loaded = Number - 
    let porcentaje = e.loaded * 100 / e.total
    progress.value = porcentaje
    /**
     * Math.floor(Number) => Number -  redondea para abajo
     * Math.ceil(Number) => Number -  redondea para arriba
     * Math.round(Number) => Number -  redondea dependiendo el caso
     * .toFixed(Number) => String - Limita la cantidad de decimales para mostrar o ninguno si el parametro es nulo
     */
    //console.log(`${e.loaded} de ${e.total}`)
    p.innerText = `La descarga va ${porcentaje.toFixed(1)}%`
    youtube.style.width = porcentaje + "%"
})

xhr.addEventListener("load",()=>{
    if (xhr.status == 200) {
        console.log(typeof xhr.response)
        //let respuesta = JSON.parse(xhr.response)
        //console.table(xhr.response)
        //let img = document.createElement("img")

        let a = document.createElement("a")


        //URL.createObjectURL(Blob - File) => String 
        let url = URL.createObjectURL(xhr.response)
        console.log(url)
        
        //img.src = url
        a.href = url
        //a.target = "_blank"
        a.download = "otra_imagen"
        document.body.appendChild(a)// => Para firefox , el metodo click esta solo disponible si el nodo se encuentra en el DOM
        a.click()
        document.body.removeChild(a)
        //URL.revokeObjectURL(url)
    }
})
xhr.send()


//Blob - File ext Blob
//ArrayBuffer - MediaStream - SourceStream 


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

