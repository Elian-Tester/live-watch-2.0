import React from "react";

import css from '../assets/css/sala.css'
import Chat from "./chat";
import Header from "./header";

class Contenido extends React.Component
{

    constructor() {
        super();
        this.state = {
            idVideo:'videoFern'
        }
    }

    mandarUrl(e){
        e.preventDefault();

        //key 2 = AIzaSyAavj5-jWPW8Q3DJcKMhYhmfuPd-Kv6XvQ
        let key2= 'AIzaSyAavj5-jWPW8Q3DJcKMhYhmfuPd-Kv6XvQ';
        let key= 'AIzaSyDrW59y-ANypxYRyYjnpWhGERPgCqbU4dA';
        let buscar='dua lipa leaving';
        let resPorPagina=5;
        let URL="https://www.googleapis.com/youtube/v3/search?part=snippet&key="+key2+"&type=video&q="+buscar;
        // https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDrW59y-ANypxYRyYjnpWhGERPgCqbU4dA&type=video&q=fernanfloo

        //_____________________________________________
        let idVid="";
        fetch(URL).then(response => response.json()).then(data =>{
            console.log(data)
            let idVideo = data.items[0].id.videoId;
            console.log(idVideo)
            this.setState({
                idVideo: idVideo
            })
        })
        console.log(idVid + "id vid")
        //_____________________________________________

        console.log(idVid + "id vid")

    }


    render() {
        return(
            <div className="xvideo">
                    <button type="button" className="btn btn-primary" onClick={this.mandarUrl.bind(this)}>Pedir video</button>
                    <br/>
                <h1>{this.state.idVideo}</h1>

                        <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+this.state.idVideo}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>

            </div>

        )
    }
}
export default Contenido;