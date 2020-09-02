import React, {useContext} from "react";
import {AppContext} from "../container";

const Message = () => {
    const {userName} = useContext(AppContext)
    return (
        <div className="messages">
            <h1>Messages</h1>
            <p>1 message for {userName}</p>
            <p className="message">useContext is awesome!</p>
        </div>
    );
}
export default Message