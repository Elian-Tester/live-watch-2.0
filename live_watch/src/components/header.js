import React from "react";
import css from '../assets/css/header.css'
import update from "immutability-helper"; //instalar dependencia
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTv, faSearch, faSignInAlt} from '@fortawesome/free-solid-svg-icons'
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
                        <div className="boc">

                            <h1  className="navbar-brand titulo1"> <FontAwesomeIcon icon={faTv} className="live"/>  Live-Watch</h1>
                        </div>

                        <form className="d-flex nav1">
                            {/*Entrada de texto para escribir link */}
                            <input className="form-control me-2 entrada"
                                   type="search"
                                   id='comentario'
                                   name='keyWord'
                                   placeholder="Link o título del video"
                                   value={this.state.keyWord}
                                   onChange={this.changeField_.bind(this)}
                                   aria-label="Añadir"/>
                            {/*Boton para buscar */}
                                <button className="btn " type="submit" id="buscar" onClick={this.eventReturnSearch.bind(this)}> <FontAwesomeIcon icon={faSearch} className=""/> </button>
                        </form>
                    </div>
                </nav>


        )
    }
}
export default Header;