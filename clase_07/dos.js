//(function(require,__dirname,__pathname,global,process,exports,module){
var a = 2
console.log(module)
//window.a = a

//module.exports = {a:a}
//module.exports.b = a
//exports.b = a
//exports = {} //No se puede reasignar un valor a la variable local exports. Si bien es referencia de module.exports, como es local le estaría pisando su valor
module.exports = {a}