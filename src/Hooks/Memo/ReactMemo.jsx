import { useState } from "react";
import Count from './MemoCount'

export const ReactMemo = () => {

   const [count, setCount] = useState(0)
    
    
    return(
        <div className="p-4 font-display tracking-wide flex flex-col justify-end items-center">

            <h1>{count}</h1>

            <button
            className="btn bg-cyan-500 py-1 px-3" 
            onClick={() => setCount((pre) => pre + 1)}
            disabled = {count >= 10}
            >
            Click
            </button>
            
            <Count />

        </div>
    )
};