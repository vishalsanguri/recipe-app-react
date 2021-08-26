import React from 'react'
import "../styles/header.css"
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <div className="headerdiv">
            <h6 className="easy fontsize">Recipe Master</h6>
            <div className="linkdiv">
                <Link className="textdecoration" to="/">Home</Link>
                <Link className="textdecoration" to="/services"> Recipes</Link>
                <Link className="textdecoration" to="/review">Review us</Link>
            </div>
        </div>
    )
}
