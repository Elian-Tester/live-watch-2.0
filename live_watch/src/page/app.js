import React from 'react'
import {render} from "react-dom";

import css from '../assets/css/app.css'
import Header from "../components/header";
import Sala from "../components/sala";

class App extends React.Component
{
    render() {
        return(
            <React.Fragment>
                <div className=" hd">
                    <Header/>
                </div>
                <div className="sala">
                    <Sala/>
                </div>

            </React.Fragment>
        )
    }
}

export default App;