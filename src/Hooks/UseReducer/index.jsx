import { useReducer } from "react";

export const Reducer = () => {

const initial = {
    count : 0
}

   const reducer = (state, action) => {
        switch (action.type) 
        {
         case "increment":
         return {count: state.count + 1};
         case "decrement":
         return {count: state.count - 1};
         case "reset":
         return {count: 0};
         default:
         return state; 
       }  
   };

    const [state, dispatch] = useReducer(reducer, initial)

    return <div className="p-4 h-lvh flex flex-col justify-center items-center">
        <h1>{state.count}</h1>
        <div className="flex flex-row gap-4">
        <button onClick={() => dispatch({type:"increment"})} disabled={state.count >= 10} >Increment</button>

        <button onClick={() => dispatch({type:"decrement"})}
        disabled={state.count <= -10}>Decrement</button>

        <button onClick={() => dispatch({type:"reset"}) }>Reset</button>
        </div>
    </div>
};