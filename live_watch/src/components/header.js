import React from "react";
import css from '../assets/css/header.css'
import update from "immutability-helper"; //instalar dependencia

class Header  extends  React.Component
{
    constructor(props) {
        super(props);
        this.state={
            keyWord:''
        }
    }

    changeField_(e){
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state,{
            [field] : {$set : value}
        }))
    }

    eventReturnSearch(e){
        e.preventDefault()
        let word = this.state.keyWord;
        console.log(word + 'palabra hea')
        this.props.onResponse(word)
    }

    render()
    {
        return(
                <nav className="navbar ">
                    <div className="container-fluid">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                             className="bi bi-cast icono" viewBox="0 0 16 16">
                            <path
                                d="m7.646 9.354-3.792 3.792a.5.5 0 0 0 .353.854h7.586a.5.5 0 0 0 .354-.854L8.354 9.354a.5.5 0 0 0-.708 0z"/>
                            <path
                                d="M11.414 11H14.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.086l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.086l-1-1z"/>
                        </svg>
                        <h1  className="navbar-brand titulo">Live-Watch</h1>
                        <form className="d-flex nav1">
                            {/*Entrada de texto para escribir link */}
                            <input className="form-control me-2 entrada"
                                   type="search"
                                   id='comentario'
                                   name='keyWord'
                                   placeholder="Pegar link..."
                                   value={this.state.keyWord}
                                   onChange={this.changeField_.bind(this)}
                                   aria-label="Añadir"/>
                            {/*Boton para buscar */}
                                <button className="btn " type="submit" id="buscar" onClick={this.eventReturnSearch.bind(this)}>Añadir</button>
                        </form>
                    </div>
                </nav>


        )
    }
}
export default Header;