import React from "react";

import css from '../assets/css/chat.css'
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
                        <section id="chat-mensaje">hola
                            <section id="chat-salidas">
                                <div className="chat-salidas_input"><form className="d-flex escritura">
                                    {/*Entrada de texto para escribir mensajes */}
                                    <input className="form-control me-2 escribir" type="text" placeholder="Escribir mensaje..." aria-label="Añadir"/>
                                    {/*Boton para enviar */}
                                    <button className="btn " type="submit" id="enviar"></button>
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