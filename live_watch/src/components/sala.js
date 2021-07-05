import React from "react";

import css from '../assets/css/sala.css'
import Chat from "./chat";
import Header from "./header";
import Usuarios from "./usuarios";
import Contenido from "./contenido";
import YouTube from 'react-youtube'; //instalar dependancia
import { io } from "socket.io-client"; // npm install socket.io-client

import SocketContext from '../context/socket-context'

const socket= io.connect( "ws://localhost:3006" )
socket.on('connect', ()=> {
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
            usersAux:[]
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
            console.log(idVideo)
            this.setState({
                idVideo: idVideo
            });
            //emmit
            socket.emit('envioVideoId', {videoId: idVideo}) //enviando el idVideo
        })

    }

    socketEscucha(){
        socket.on('nuevoVideoId', datos =>{
            this.setState({
                idVideo: datos.videoId
            });
        });

        socket.on('controlDeVideo', datos =>{
            alert("nuevo Video Id en socket escucha: "+ datos.videoId);
        });

    }


    onYouTubeIframeAPIReady() {
    this.state.player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: '',
        events: {
            'onReady': this.onPlayerReady(),
            'onStateChange': onPlayerStateChange
        }
    });

}
    onReady(event){
        console.log('play video')
        //event.target.playVideo();
    }
    onPlay(event){
        alert('play')
    }
    onPause(){
        alert('pause')
    }

    render() {

        this.socketEscucha()

        let opts = {
            //w: 560 o 640   h:315 o 390
            height: '315',
            width: '560',
            playerVars: {
                autoplay: 0,
            },
        };

        return(

            <SocketContext.Provider value={socket}>
                <div>
                    <Header onResponse={this.eventReturnFinish.bind(this)}/>
                    <div className="area">

                        <div className="usuario">
                            <div className="card">
                                <div className="card-header text-white bg-dark">
                                    Conectados
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
                            <br/>
                            <YouTube
                                videoId={this.state.idVideo}
                                opts={opts}
                                onReady={this.onReady}
                                onPlay={this.onPlay}
                                onPause={this.onPause}
                            />

                        </div>
                        <Chat socket={socket}/>
                    </div>
                </div>
            </SocketContext.Provider>
        )
    }
}
export default Sala;