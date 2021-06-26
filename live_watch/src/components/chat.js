import React from "react";
import css from '../assets/css/chat.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

class Chat extends React.Component
{
    render() {
        return(
            <div>
                <div className="container-fluid">
                    <h4 className="text-center">Chat en Vivo</h4>
                </div>
                <div>
                    <section id="chat">
                        <section className="caja-texto">
                            Mensajes 1
                            <br/>
                            Mensajes 1
                            <br/>Mensajes 1
                            <br/>Mensajes 1
                            <br/>Mensajes 1
                            <br/>
                            Mensajes 1
                            <br/>
                            Mensajes 1
                            <br/>
                            Mensajes 1
                            <br/>
                            Mensajes 1
                            <br/>
                            Mensajes 1
                            <br/>Mensajes 1
                            <br/>
                            Mensajes 1
                            <br/>
                            Mensajes 1
                            <br/>Mensajes 1
                            <br/>Mensajes 1
                            <br/>Mensajes 1
                            <br/>
                            Mensajes 1
                            <br/>
                            Mensajes 1
                            <br/>
                            Mensajes 1
                            <br/>
                            Mensajes 1
                            <br/>
                            Mensajes 1
                            <br/>Mensajes 1
                            <br/>
                            Mensajes 1
                            <br/>
                            Mensajes 1
                            <br/>Mensajes 1
                            <br/>Mensajes 1
                            <br/>Mensajes 1
                            <br/>
                            Mensajes 1
                            <br/>
                            Mensajes 1
                            <br/>
                            Mensajes 1
                            <br/>
                            Mensajes 1
                            <br/>
                            Mensajes 1
                            <br/>Mensajes 1
                            <br/>




                        </section>
                        <section id="chat-mensaje">
                            <section id="chat-salidas">
                                <div className="chat-salidas_input"><form className="d-flex escritura">
                                    {/*Entrada de texto para escribir mensajes */}
                                    <input className="form-control me-2 escribir" type="text" placeholder="Escribir mensaje..." aria-label="Añadir"/>
                                    {/*Boton para enviar */}
                                    <button className="btn " type="submit" id="enviar">
                                        <FontAwesomeIcon icon={faPaperPlane}/>
                                    </button>
                                </form>
                                </div>
                            </section>
                        </section>
                    </section>
                </div>
            </div>
        )
    }
}
export default Chat;