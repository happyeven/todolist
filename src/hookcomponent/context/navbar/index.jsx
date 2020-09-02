import React, {useContext} from "react"
import {AppContext} from "../container";
function Navbar() {
    const {userName} = useContext(AppContext);
    return (
        <div className="navbar">
            <p>AwesomeSite</p>
            <p>{userName}</p>
        </div>
    );
}
export default Navbar