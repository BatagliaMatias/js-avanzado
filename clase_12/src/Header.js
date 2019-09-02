import React from "react"
import {NavLink} from "react-router-dom"
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
                {links.map((link,i)=>
                    <NavLink to={`/${link}`} key={i}>{link}</NavLink>
                )} 
                </nav>
            </header>
        )
    } 
}

let mapStateToProps = store => ({ links : store.links })

export default connect(mapStateToProps,null)(Header)
