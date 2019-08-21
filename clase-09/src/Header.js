import React from "react"

class Header extends React.Component {
    render(){
        let {links} = this.props
        return(
            <header>
                <h1>React</h1>
                <nav>
                    {links.map((link,i)=>
                        <a href={`/${link}`} key={i}>{link}</a>
                    )}
                </nav>
            </header>
        )
    } 
}

export default Header
