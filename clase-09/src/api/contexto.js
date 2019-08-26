import { createContext } from "react"

//El contexto de una aplicacion es un objeto que eventualmente se puede consumuir desde cualquier componente. Se crea ejecutando la funcion createContext y el parametro que puede recibir es el contexto por default que queres usar en la aplicacion PERO el mismo no se puede cambiar si no es usado como estado de un componente. La ejecucion de esta funcion nos retorna dos componentes : Provider y el Consumer. 
let contexto = createContext()
export let {Provider,Consumer} = contexto

export default contexto

