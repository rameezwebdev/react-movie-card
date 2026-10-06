import { useReducer } from "react";

export const Reducer = () => {
   const reducer = (state,action) => {
    return action.type === "increment" ?  state + 1: state - 1 ;
   };

    const [state, dispatch] = useReducer(reducer, 0)

    return <div className="p-4 h-lvh flex flex-col justify-center items-center">
        <h1>{state}</h1>
        <button onClick={() => dispatch({type:"increment"})} disabled={state >= 10} >Increment</button>
        <button onClick={() => dispatch({type:"decrement"})}
        disabled={state <= -10}    >Decrement</button>
    </div>
};