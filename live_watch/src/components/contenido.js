import React from "react";

import css from '../assets/css/sala.css'
import Chat from "./chat";
import Header from "./header";

class Contenido extends React.Component
{

    constructor(props) {
        super(props);
        console.log('en constructor')
        this.state = {
            idVideo:'Gm0tYokffMU',
            buscarVideo: this.props.keyWord
        }
    }

    componentDidUpdate(prevProps) {
        console.log('despues del render')
        this.mandarUrl()
    }

    mandarUrl(e){
        let buscar = this.props.keyWord;
        console.log(buscar + 'en contenido')
        //key 2 = AIzaSyAavj5-jWPW8Q3DJcKMhYhmfuPd-Kv6XvQ
        let key2= 'AIzaSyAavj5-jWPW8Q3DJcKMhYhmfuPd-Kv6XvQ';
        let key= 'AIzaSyDrW59y-ANypxYRyYjnpWhGERPgCqbU4dA';
        let resPorPagina=5;
        let URL="https://www.googleapis.com/youtube/v3/search?part=snippet&key="+key2+"&type=video&q="+buscar;
        // https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDrW59y-ANypxYRyYjnpWhGERPgCqbU4dA&type=video&q=fernanfloo

        //_____________________________________________
        let idVid="";
        /*fetch(URL).then(response => response.json()).then(data =>{
            console.log(data)
            let idVideo = data.items[0].id.videoId;
            console.log(idVideo)
            this.setState({
                idVideo: idVideo
            })
        })*/
        //_____________________________________________
    }


    render() {

        return(
            <div className="xvideo">
                    <br/>
                {console.log('en render')}
                <h2>{this.props.keyWord}</h2>
                <h2>{this.state.buscarVideo + 'xd'}</h2>
                        <iframe width="580" height="315" src={"https://www.youtube.com/embed/"+this.state.idVideo}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        )
    }
}
export default Contenido;