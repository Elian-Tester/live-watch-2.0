import React from "react";
import css from '../assets/css/chat.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

class Usuarios extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <li className="list-group-item"> {this.props.user} </li>
            </div>
        )
    }
}
export default Usuarios;