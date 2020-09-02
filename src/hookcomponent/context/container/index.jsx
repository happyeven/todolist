import React from "react";
import Navbar from '../navbar'
import Messages from "../message"

const AppContext = React.createContext({});

function Container() {
    return (<div> <AppContext.Provider value={{
        userName: 'superawesome'
    }}>
        <div className="App">
            <Navbar/>
            <Messages/>
        </div>
    </AppContext.Provider>
    </div>)
}

export {AppContext, Container}