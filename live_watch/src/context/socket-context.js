import React from "react";
import { io } from "socket.io-client"; // npm install socket.io-client
const SocketContext = React.createContext({
    datoSocket: []
});


export default SocketContext;



/*
export function SocketProvider(props){

    const socket = io('ws://localhost:3006')


    let value = useMemo(()=>{
        return({
            socket
        })
    }, [socket])

    return <SocketContext.Provider value={value} {...props} />
}

export function useSocket(){
    let context = React.useContext(SocketContext);
    if(!context){
        throw new Error('useSocket debe estar dentro de proveedor SocketContext')
    }
    return context;
}*/
