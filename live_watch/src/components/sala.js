import React from "react";

import css from '../assets/css/sala.css'
import Chat from "./chat";
import Header from "./header";
import Usuarios from "./usuarios";
import Contenido from "./contenido";

class Sala extends React.Component
{
    render() {
        return(
            <div>
                <Header/>
                <div className="area">
                    <Usuarios/>
                    <Contenido/>
                    <Chat/>
                </div>
            </div>

        )
    }
}
export default Sala;