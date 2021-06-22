import React from "react";
import css from '../assets/css/header.css'
class Header  extends  React.Component
{
    render()
    {
        return(
                <nav className="navbar ">
                    <div className="container-fluid">
                        <h1  className="navbar-brand">Live Watch</h1>
                        <form className="d-flex nav1">
                            {/*Entrada de texto para escribir link */}
                            <input className="form-control me-2" type="search" placeholder="Añadir link..." aria-label="Añadir"/>
                            {/*Boton para buscar */}
                                <button className="btn buscar" type="submit">Search</button>
                        </form>
                    </div>
                </nav>


        )
    }
}
export default Header;