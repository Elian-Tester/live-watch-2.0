import React from "react";
import css from '../assets/css/login.css'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSignInAlt,faUserSecret} from '@fortawesome/free-solid-svg-icons'
class Login  extends  React.Component
{
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
                                                <input type="text" className=" form-control" placeholder="Usuario..." />
                                        </div>
                                    <div className="d-grid gap-2 form-group">
                                        <button className="btn  entrar" type="submit">
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