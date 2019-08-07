//OOP : Paradigma de Prototipos
//Prototipo : Es un objeto que vive como referencia dentro de otro. Todos los objetos tienen prototipos*. Todos los prototipos se pueden acceder(ver) a traves de __proto__ . 
//El prototipo de un objeto se referencia desde la propiedad .prototype de la funcion que lo creo


//Cadena de prototipos : Si un objeto no puede acceder a una propiedad adentro de si mismo, puede bajar tantos prototipos como encuentre en su cadena hasta encontrarla o arrojar error.  

//*Salvo Object.create()

//Instancia.__proto__ == Function.prototype 
//Todas las funciones tienen una propiedad .prototype en su interior* 

//*Menos las funciones flecha, por lo que no pueden ser funciones constructoras, ya que no le pueden asignar prototipo a sus instancias

//Para que dos objetos sean considearos "instancias" de la misma "clase" tienen que compartir el mismo prototipo. 
let obj = {x:1}
let otro = {y:"6"}

let obj_fn = Object()
//Object - Function
//Funciones :  Son objetos con la habilidad de poder ser ejecutados, son de primer orden, variadicas  y tienen scope(ambito) y contexto.
//Primer Orden : Son aquellas que pueden ser pasadas como variables

//var miCallback = function(){}
/* 
function miCallback(){

}
[1,2,3].forEach(miCallback)
*/
//Variadicas : Son aquellas que no dependen de la cantidad de argumentos definidos ni parametros recibidos para su funcionamiento
/* 
function foo(a){}
foo() 

function foo(){
    console.log(arguments)
}
foo(1)

console.dir(foo)


Scopes : El alcance de una fn para llegar a una variable (global + local + Closure)

Closure : Espacio de memoria optimizable que se genera cuando una funcion es definda adentro de otra funcion 
*/

function externa(){

    let x = true

    //Atributo "Privado"
    let a = 10

    /* 
    let interna = function(){
        console.log(a)
    } 
    */
    
    //Metodos "Publicos"
    let getter = function(){
        console.log(a)
    }

    let setter = function(v){
        a = v 
        console.log(a)
    }

    //return { getter : getter , setter : setter }

    //Object Shorthand
    return { getter , setter }
}

let resultado_uno = externa()
let resultado_dos = externa()
//A partir de esta linea, las referencias dentro de "externa" dejan de existir por el Garbage Collector



//Contexto : Es una referencia al objeto que contiene a la funcion (default) y está en la variable "this". No es estatico y puede cambiar dependiendo la ejecucion o por el programador. 

//window.foo = function(){}
//var foo = function(){}
/* function foo(){
    console.log(this)
} */

//foo()


let test = {
    x : 1,
    fn : function(){
        
        console.log(this)

        //let self = this

        setTimeout(()=>{
            console.log(this)
        },0)

    }
}


//test.fn()



function ctx(a,b){
    console.log("Params",a,b)
    console.log("Ctx",this)
    console.log("*************************")
}

ctx(1,2) //1 2 window{}
//call - apply - bind - new 
ctx.call("call",10,20)  //Ejecuta
ctx.apply("apply",[100,200]) //Ejecuta
let retorno = ctx.bind("bind",1000,2000) //No la ejecuta 
let retorno_global = ctx.bind(null,1000,2000)


function ejemploCtxEventos(a,e){
    console.log(a,e)
}

document.addEventListener("click",ejemploCtxEventos.bind(null,"A"))
/* 
document.addEventListener("click",(e)=>{
    ejemploCtxEventos("Este es A")
}) 
*/


//NEW : Ejecutar la funcion que tenga al lado pero le redefine el contexto con un objeto nuevo y vacio. Cuando termina la ejecucion, retorna ese objeto. 

//Funciones Constructoras
function Foo(x){
    //let this = {}
    this.x = x
    //return this
}

//Foo.prototype == uno|diez.__proto__
let uno = new Foo(1)
let diez = new Foo(10)
//Foo("A")

//new foo == foo.call({})


let foo = a => {
    this.a = a
    console.log(this)
}

foo.call("Nuevo Contexto")
//let inst = new foo("Foo")



console.clear()


function Persona(nombre,apellido){

    //Propiedad "Privada"
    let n = nombre

    //Propiedad "Publica"
    this.nombre = nombre
    this.apellido = apellido
    
    //Metodo "Publico"
    /* 
    this.getNombre = function(){
        console.log(this.nombre)       
    } */

    /* 
    Object.defineProperty(this,"nombre",{
        value : nombre
    }) 
    */
}

Persona.prototype.getNombre = function(){
    console.log(this.nombre)       
}

//Asignacion automática de prototipo

let juan = new Persona("Juan","Gonzalez")
let carlos = new Persona("Carlos","Gomez")


function Empleado(sueldo,nombre,apellido){
    //Composicion
    this.sueldo = sueldo

    /* 
    this.nombre = nombre
    this.apellido = apellido 
    */
    //Persona() Aca el this es window
    //new Persona() aca el this es {}
    //Persona.call(this,nombre,edad)
    Persona.apply(this,[nombre,apellido])

    Empleado.prototype.trabajar = function(){
        console.log("Trabajando...")
    }
}

//Herencia
//SubClass.prototype = Object.create(SuperClass.prototype)
//[SubClass.prototype.constructor = SubClass]
Empleado.prototype = Object.create(Persona.prototype)
Empleado.prototype.constructor = Empleado

let empleado = new Empleado(1,"Nuevo","Empleado")



/* 
juan.__proto__ == Persona.prototype
Persona.prototype == new Object()
Persona.prototype.__proto__ = Object.prototype

//Propiedades dinámicas = value - writable - enumerable - configurable 
juan.nombre = "Carlos"
for(prop in juan){ console.log(prop) }
delete juan.nombre
*/
//new Object
let proto_manual = {
    x : 1
}

let inst_sin_proto = Object.create(null)
let inst_con_proto = Object.create(proto_manual,{
    nombre : {
        value : "Instancia con prototipo",
        writable : false,
        enumerable : false,
        configurable : false
    }
})

//inst_con_proto.nombre = "Instancia con prototipo"


//https://www.youtube.com/watch?v=PMfcsYzj-9M&t=1399s




/**

cache
By default, fetch requests make use of standard HTTP-caching. That is, it honors Expires, Cache-Control headers, sends If-Modified-Since, and so on. Just like regular HTTP-requests do.

The cache options allows to ignore HTTP-cache or fine-tune its usage:

"default" – fetch uses standard HTTP-cache rules and headers;
"no-store" – totally ignore HTTP-cache, this mode becomes the default if we set a header If-Modified-Since, If-None-Match, If-Unmodified-Since, If-Match, or If-Range;
"reload" – don’t take the result from HTTP-cache (if any), but populate cache with the response (if response headers allow);
"no-cache" – create a conditional request if there is a cached response, and a normal request otherwise. Populate HTTP-cache with the response;
"force-cache" – use a response from HTTP-cache, even if it’s stale. If there’s no response in HTTP-cache, make a regular HTTP-request, behave normally;
"only-if-cached" – use a response from HTTP-cache, even if it’s stale. If there’s no response in HTTP-cache, then error. Only works when mode is "same-origin".

 */





