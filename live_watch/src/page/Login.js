import React from "react";
import css from '../assets/css/login.css'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSignInAlt,faUserSecret} from '@fortawesome/free-solid-svg-icons'
import update from "immutability-helper";
class Login  extends  React.Component
{
    constructor() {
        super();
        this.state={
            mensajeTexto: ''
        }
    }

    changeField_(e){
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state,{
            [field] : {$set : value}
        }))
    }

    ingresarNombre(e){
        e.preventDefault()
        console.log( 'User name => '+this.state.mensajeTexto)
        //window.localStorage.setItem('idUser',data.idUser)
        window.localStorage.setItem('userName', this.state.mensajeTexto) // agrega el dato la memoria storege del navegador
        this.props.history.push('/Sala') //Carga la pagina en la ruta de forma directa
    }


    render()
    {
        return(
                <body className="">
                    <div className="modal-dialog text-center">
                        <h2>Bienvenido a Live-Watch</h2>
                        <div className="col-sm-12 main-section">
                            <div className="modal-content">
                                <div className="col-12 user-img">
                                    <img src="src/image/bob.png" width={80} alt=""/>
                                </div>
                                <form className="col-12" >
                                        <div className="form-group" id="user-group">
                                            <label className="form-group ">Dinos tu nombre: </label>
                                            <FontAwesomeIcon icon={faUserSecret} className="ni"/>
                                                <input name='mensajeTexto'
                                                       value={this.state.mensajeTexto}
                                                       onChange={this.changeField_.bind(this)}
                                                       type="text"
                                                       className=" form-control"
                                                       placeholder="Usuario..." />
                                        </div>
                                    <div className="d-grid gap-2 form-group">
                                        <button onClick={this.ingresarNombre.bind(this)}
                                                className="btn  entrar"
                                                type="submit">
                                            <FontAwesomeIcon icon={faSignInAlt}/> Ingresar</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </body>
        )
    }
}
export default Login;