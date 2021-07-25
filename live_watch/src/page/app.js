import React from 'react'
import {render} from "react-dom";

import css from '../assets/css/app.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from "../components/header";
import Sala from "../components/sala";
import Login from "./Login";
import Contenido from "../components/contenido"


class App extends React.Component
{
    render() {
        return(
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Login}/>
                        <Route path='/Sala' component={Sala}/>
                    </Switch>
                </BrowserRouter>
        )
    }
}

export default App;