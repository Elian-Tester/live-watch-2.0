import React from 'react'
import {render} from "react-dom";
import Header from "../components/header";

class App extends React.Component
{
    render() {
        return(
            <React.Fragment>
                <div>
                    <Header/>
                </div>
            </React.Fragment>
        )
    }
}

export default App;