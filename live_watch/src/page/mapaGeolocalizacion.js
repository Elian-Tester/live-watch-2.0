import React from "react";
import update from "immutability-helper";


class Mapa extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            latitud:'',
            longitud:''
        }
    }

    changeField_(e){
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state,{
            [field] : {$set : value}
        }))
    }

    render() {
        return(
            <h2>Mapa</h2>
        )
    }
}