"use strict"

//Errores Silenciosos
let no_din = Object.create(null,{
    a : {
        value : true
    }
})

//delete no_din.a ;
//no_din.a = "Nuevo Valor" ;

let obj = {
    a : 1,
    a : 2   
}

let aa 
aa = 50
//console.log(a)

//function foo(a,a,c){
function foo(a,b,c){
    //console.log(a,b,c)
    console.log(a,c)
}

//foo(10,40)





//https://github.com/rus0000/jsinheritance
//Modelo de prototipos 
let test = true;
(function (){

    //SuperClase | Super Prototipo
    let proto_uno = {
        saludo : function(){
            console.log("Hola")
        },
        constructor : function Persona(){
            throw new TypeError("Constructor Ilegal")
        }
    }

    //inst.__proto__ === Object.prototype
    //inst.__proto__ === x === Object.create(x)
    let inst_uno = Object.create(proto_uno)
    let inst_dos = Object.create(proto_uno)


    //SubClase | Sub Prototipo
    let proto_dos = Object.create(proto_uno,{
        trabajar : {
            value : function(){
                console.log("Trabajando")
            }//writable : false, enumerable: false, configurable: false
        },
        constructor : {
            value : function Empleado(){
                throw new TypeError("Constructor Ilegal")
            }
        }
    })

    let inst_tres = Object.create(proto_dos)

    //NAMESPACE 
    window.carlos = inst_tres

})();
//IFEE = Immediatly Invoked Function Expression 
//Patrón Módulo 
//archivo_uno.js
(function(){
    //$.fn === $.prototype 
    
    //$("body") => jQuery {}

    //$().ajax()
    //window.NAMESPACE = valor
})();
//Patron Revelador
/* 
(function(){
    let b = true
    window.a = b
})() 
*/
let a = (function(){
    let b = true
    return b
})();


/* 
let proto_dos = {
    trabajar : function(){
        console.log("Trabajando...")
    }
}
*/


/*

Object.preventExtensions(obj) : No permite que se agreguen mas propiedades a un objeto

Object.seal(obj) : preventExtensions + writable : false

Object.freeze(obj) : Object.seal() + configurable : false



 * Los objetos pueden tener dos tipos de propiedades : 
 * 
 * 
 * data : Son todas aquellas propiedades dinamicas cuyos flags y/o atributos puedan ser : value - writable - configurable - enumerable
 * 
 * let obj = {x:1}
 * obj.y = 20
 * Object.defineProperty(obj,"z",{value:3})
 * 
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
 * 
 * accessor : Son analogos a los getter y setter de cualquier otro lenguaje. Funcionan como propiedades normales pero se implementan como funciones. 
 * 
 * let obj = {
 *      get nombreCompleto(){
 *            return this._nombre + " " + this._apellido
 *      },
 *      set nombreCompleto(valor){
*             this._nombre = valor.split(" ")[0]
*             this._apellido = valor.split(" ")[1]
 *            //let [this.nombre,this.apellido] = valor.split(" ")
 *      } 
 * }
 * 
 * console.log(obj.nombreCompleto)
 * obj.nombreCompleto = "Horacio Gutierrez"
 * console.log(obj._nombre)
 * 
 */

 //Modelo ES6

let uno = new persona("Uno","test")

function persona(nombre,apellido){
    this.nombre = nombre
    this.apellido = apellido
    persona.prototype.nueva = function(){

    }
}
//persona.prototype.nueva = true
//persona.test = true

//let dos = new Persona("Uno","test")

class Persona {

    constructor(nombre,apellido){
        this.nombre = nombre
        this.apellido = apellido
    }

    nueva(){
        console.log("Nueva Propiedad")
    }

    static test = true

}

//Persona.test = true

let dos = new Persona("Uno","test")

//Built-in Objects : String - Number - Boolean - Function - Object - Array - Date - Math - Error (TypeError - SyntaxError , etc... ) - JSON 
/* 
function Empleado(){
    //Persona.call(this,...argms)
}
Empleado.prototype = Object.create(Persona.prototype)
Empleado.prototype.constructor = Empleado 
*/


class Empleado extends Persona {
    
    constructor(sueldo,nombre,apellido){
        super(nombre,apellido)
        this.sueldo = sueldo
    }

}

let tres = new Empleado(1,"Tres","Hijo")

Object.getOwnPropertyDescriptor(Persona.prototype,"nueva")


//Uso Estricto : Es la manera para unificar algunas implementaciones del lenguaje. Se activa usando la declaración de "use strict"


//window 
//(function(window,document){

//console.log(w.innerHeight)
//w.a = true

//})(window,document)

