import React from "react";

import css from '../assets/css/sala.css'
import Chat from "./chat";

class Sala extends React.Component
{
    render() {
        return(
            <div className="area">
                <div className="usuario">

                </div>
                <div className="xvideo">

                </div>
                <div className="livechat">
                    <Chat/>
                </div>

            </div>

        )
    }
}
export default Sala;