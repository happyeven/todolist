import React, {useReducer} from "react";
import MyReducer from "../../hookreducer";
import { useHistory } from 'react-router-dom';

const ReducerButton = () => {
    const [state, dispatch] = useReducer(MyReducer, {count: 0})

    const history = useHistory();

    function handleLogin() {
        console.log(history)
        history.push('www.baidu.com');
    }
    return (<div>
            <button onClick={() => dispatch({type: 'countUp'})}>
                +1
            </button>
            <p>Count: {state.count}</p>
            <button onClick={handleLogin}>aaa</button>
        </div>
    )
}
export default ReducerButton