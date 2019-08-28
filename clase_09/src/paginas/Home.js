import React from "react"
import Contador from "../Contador"

class Home extends React.Component {

    render(){
        let {contador,aumentarContador} = this.props
        return(
            <>
            <h2>Home</h2>
            <Contador contador={contador} aumentar={aumentarContador}/>
            </>
        )
    }
}

export default Home