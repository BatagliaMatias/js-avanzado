import React from "react"
import {NavLink} from "react-router-dom"
import {Consumer} from "./api/contexto"

class Header extends React.Component {
    render(){
        return(
            <header>
                <NavLink to="/" exact>
                    <h1>React</h1>
                </NavLink>
                <nav>
                    <Consumer>
                    {contexto=>{
                        let {links} = contexto
                        return links.map((link,i)=>
                            <NavLink to={`/${link}`} key={i}>{link}</NavLink>
                        ) 
                    }}
                    </Consumer>
                </nav>
            </header>
        )
    } 
}

export default Header
