import React, {useReducer} from "react";
import MyReducer from "../../hookreducer";


const ReducerButton = () => {
    const [state, dispatch] = useReducer(MyReducer, {count: 0})

    return (<div>
            <button onClick={() => dispatch({type: 'countUp'})}>
                +1
            </button>
            <p>Count: {state.count}</p>
        </div>
    )
}
export default ReducerButton