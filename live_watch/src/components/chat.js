import React from "react";
import css from '../assets/css/chat.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import update from "immutability-helper";

import { io } from "socket.io-client"; // npm install socket.io-client

import SocketContext from '../context/socket-context'


class Chat extends React.Component
{
    constructor(props) {
        super(props);
        this.state={
            mensajeTexto:'',
            mensajeCaja:[],
            auxiliar:[],
            socketChat: props.socket,
            userName: window.localStorage.getItem("userName")
        }
    }

    componentDidMount() {
        this.state.socketChat.on('connect', ()=> {
            console.log("Conexion en chat", this.state.socketChat.id)
        })


        this.state.socketChat.on('nuevo_mensaje', datos =>{
            console.log(datos.user+": "+ datos.mensaje);

            this.state.auxiliar.push(datos.user+": "+ datos.mensaje)
            this.setState({
                mensajeCaja: this.state.auxiliar
            })
        });

    }

    changeField_(e){

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state,{
            [field] : {$set : value}
        }))
    }

    sendMessage(e){

        e.preventDefault()
        console.log('Send >'+this.state.mensajeTexto)

        /*this.state.auxiliar.push(this.state.mensajeTexto)
        this.setState({
            mensajeCaja: this.state.auxiliar
        })
       */

        //Aqui iran el enviar
        this.state.socketChat.emit('enviarm', {mensaje: this.state.mensajeTexto, usuario: this.state.userName})

        this.setState({
            mensajeTexto:''
        })


    }

    render() {
        return(
            <SocketContext.Consumer>
                {
                    socket =>
                        <div className="livechat">
                            <div className="container-fluid">
                                <h4 className="text-center">Chat en Vivo</h4>
                            </div>
                            <div>
                                <section>
                                    <section className="caja-texto">
                                        <For each="item" index="idx" of={ this.state.mensajeCaja }>
                                            { item }
                                            <br/>
                                        </For>
                                    </section>
                                    <section id="chat-mensaje">
                                        <section id="chat-salidas">
                                            <div className="chat-salidas_input"><form className="d-flex escritura">
                                                {/*Entrada de texto para escribir mensajes */}
                                                <input className="form-control me-2 escribir"
                                                       type="text"
                                                       id='chat'
                                                       name='mensajeTexto' /*siempre poner nombre de la variable a llenar*/
                                                       placeholder="Escribir mensaje..."
                                                       value={this.state.mensajeTexto}
                                                       onChange={this.changeField_.bind(this)}
                                                       aria-label="Añadir"/>
                                                {/*Boton para enviar */}
                                                <button className="btn " type="submit" id="enviar" onClick={this.sendMessage.bind(this)}>
                                                    <FontAwesomeIcon icon={faPaperPlane}/>
                                                </button>
                                            </form>
                                            </div>
                                        </section>
                                    </section>
                                </section>
                            </div>
                        </div>
                }

            </SocketContext.Consumer>
        )
    }
}
export default Chat;