import React from "react"
import {NavLink} from "react-router-dom"
import {Consumer} from "./api/contexto"
import { connect } from "react-redux"

class Header extends React.Component {
    render(){
        let {links} = this.props
        return(
            <header>
                <NavLink to="/" exact>
                    <h1>React</h1>
                </NavLink>
                <nav>
                    {/* <Consumer> */}
                    {//contexto=>{
                        //let {links} = contexto
                        /* return */ links.map((link,i)=>
                            <NavLink to={`/${link}`} key={i}>{link}</NavLink>
                        ) 
                    /*}*/}
                   {/*  </Consumer> */}
                </nav>
            </header>
        )
    } 
}

/* let mapStateToProps = store => {
    //Retornale al componente un prop llamado...
            //links  Con el valor store.links
    return { links : store.links}
} */

let mapStateToProps = store => ({ links : store.links })

export default connect(mapStateToProps,null)(Header)

//export default connect(()=>({}),null)(Header)
