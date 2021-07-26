import React from "react";

import css from '../assets/css/sala.css'
import Chat from "./chat";
import Header from "./header";
import Usuarios from "./usuarios";
import Contenido from "./contenido";
import YouTube from 'react-youtube'; //instalar dependancia
import { io } from "socket.io-client"; // npm install socket.io-client
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane, faUsers} from '@fortawesome/free-solid-svg-icons'

const YTPlayer = require('yt-player')
let player='';



import SocketContext from '../context/socket-context'

const socket= io.connect( "http://localhost:3000" ) //http://localhost:3000  - ws://localhost:3006
socket.on('connection', ()=> {
    console.log("Conexion exitosa", socket.id)
})

socket.on('nuevo_user', function(datos){
    alert("nuevo usuario conectado: "+ datos.user);
});


class Sala extends React.Component
{
    constructor(props) {
        super(props);
        this.state={
            keyWord:'',
            idVideo:'Gm0tYokffMU',
            player: '',
            users:["garcia"],
            usersAux:[],
            titulo:''
        }
    }

    socketIniciar(){
        //crear y conectar socket

    }

    eventReturnFinish(response){
        console.log('finish')
        console.log(response +'sala')
        let keywi = response;
        console.log(keywi + ' palabra en sala')
        this.state.users.push(keywi)
        this.setState({
            usersAux: this.state.users
        })

        this.setState({
            keyWord: keywi
        })
        this.mandarUrl(keywi)
    }

    mandarUrl(buscar){

        //buscar.preventDefault()
        console.log(buscar + ' en mandar url')
        //key 2 = AIzaSyAavj5-jWPW8Q3DJcKMhYhmfuPd-Kv6XvQ
        let key2= 'AIzaSyAavj5-jWPW8Q3DJcKMhYhmfuPd-Kv6XvQ';
        let key= 'AIzaSyDrW59y-ANypxYRyYjnpWhGERPgCqbU4dA';
        let resPorPagina=1;
        let URL="https://www.googleapis.com/youtube/v3/search?part=snippet&key="+key2+"&type=video&q="+buscar;
        // https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDrW59y-ANypxYRyYjnpWhGERPgCqbU4dA&type=video&q=fernanfloo

        //_____________________________________________
        fetch(URL).then(response => response.json()).then(data =>{
            console.log(data)
            let idVideo = data.items[0].id.videoId;
            let titulo = data.items[0].snippet.title;
            player.load(idVideo, [player.play()])
            this.setState({
                titulo: titulo
            })
            //emmit
            socket.emit('envioVideoId', {videoId: idVideo}) //enviando el idVideo
        })

    }

    socketEscucha(){
        socket.on('nuevoVideoId', datos =>{
            player.load(datos.videoId, [player.play()])
            /*this.setState({
                idVideo: datos.videoId
            });*/
        });

        socket.on('EventoControl', datos =>{
            if(datos.eventoControl == 'pause'){
                player.pause()
            }
            if(datos.eventoControl == 'play'){
                player.play()
            }

        });

    }

    componentDidMount() {
        const div = document.querySelector("div[class = 'player']")
        player = new YTPlayer(div)
        player.setVolume(100)

        player.on('playing', () => {
            this.play()
        })
        player.on('paused', () => {
            this.pausa()
        })
    }



    pausa(){
        //emmit
        socket.emit('envioEventoControl', {eventoControl: 'pause' }) //enviando el idVideo
    }
    play(){
        //emmit
        socket.emit('envioEventoControl', {eventoControl: 'play' }) //enviando el idVideo
    }




    render() {

        this.socketEscucha()

        let opts = {
            //w: 560 o 640   h:315 o 390
            height: '340',
            width: '600',
            playerVars: {
                autoplay: 0,
            },
        };

        return(

            <SocketContext.Provider value={socket}>
                <div>
                    <Header onResponse={this.eventReturnFinish.bind(this)}/>
                    <div className="area">

                        <div className="usuarioGen">
                            <div className="card">
                                <div className="card-header text-white bg-dark text-center">
                                    <h4 className="usuariosOnline">Usuarios Conectados <FontAwesomeIcon icon={faUsers} className="conectados"/></h4>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <For each="item" index="idx" of={this.state.usersAux}>
                                        <Usuarios user={item}/>
                                    </For>
                                </ul>
                            </div>

                        </div>
                        {/*//_______________Contenido_________________*/}
                        <div className="xvideo">
                            <center>
                                <div className="player" id="video"/>


                            {/*<YouTube
                                className="YouTube"
                                id='playerId'
                                videoId={this.state.idVideo}
                                opts={opts}
                                onReady={this.onReady}
                                onPlay={this.onPlay}
                                onPause={this.onPause}
                            />*/}
                                <br/>
                                <center>
                                    <h4 className='titulo'>{this.state.titulo}</h4>
                                </center>
                            </center>
                        </div>
                        <Chat socket={socket}/>
                    </div>
                </div>
            </SocketContext.Provider>
        )
    }
}
export default Sala;