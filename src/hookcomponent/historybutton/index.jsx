import {useHistory} from 'react-router-dom';
import React from "react";
const  HistoryButton = ()=>{
    const history = useHistory();

    function handleLogin() {
        console.log(history)
        history.push('www.baidu.com');
    }
    return (
    <button onClick={handleLogin}>aaa</button>)
}
export default HistoryButton