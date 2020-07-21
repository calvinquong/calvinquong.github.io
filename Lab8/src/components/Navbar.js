import React from 'react'
import {Link, NavLink} from 'react-router-dom'
const Navbar=()=>{
    return(
        <nav className="nav-wrapper blue darken-0">
        <div className="container">
        <a className="brand-logo">
        <img style={{ height: '45px', width: '45px'}} src={ require('./logo.png') } /> CQ Badminton</a>

        <ul className="right">
            <li><Link to="/"> <img src="https://img.icons8.com/fluent/48/000000/home.png" style={{width:"30px"}}/> Home</Link></li>
            <li><Link to="/rackets"><img src="https://img.icons8.com/office/48/000000/badminton-racquet.png" style={{width:"30px"}}/> Rackets</Link></li>
            <li><Link to="/club"><img src="https://img.icons8.com/color/48/000000/badminton-2.png" style={{width:"30px"}}/> Club</Link></li>    
            <li><Link to="/about"><img src="https://img.icons8.com/doodle/48/000000/information.png" style={{width:"30px"}}/> About</Link></li>   
            <li><Link to="/contact"> <img src="https://img.icons8.com/color/48/000000/open-book.png" style={{width:"30px"}}/> Book</Link></li>  

        </ul>
        </div>
        </nav>
    )
}

export default Navbar