import { memo, useCallback, useState } from "react";

const Button = memo((({onClick, children}) => {
    console.log(`Redering button: ${children}`);

   return <button className={`text-black mb-4 py-2 px-5 ${children === 'increment' ? 'bg-green-500' : 'bg-red-500'}`}
   
   onClick={onClick}>{children}</button> 
}));

export default function Usecallback () {

    const [count, setCount] = useState(0);

    // const increment = () => {
    //     return setCount(count + 1);
    // };

    const increment = useCallback(() => {
        console.log('increment');
        return setCount((pre) => pre + 1);

    },[]);

    // const decrement = () => {
    //     return setCount(count - 1);
    // };

    const decrement = useCallback(() => {
        console.log('decrement');
        return setCount((pre) => pre - 1);

    },[]);

  
    return(
        <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center text-white">

            <h1 className="mb-4">
                {count}
            </h1>

            <Button onClick = {increment}>Increment</Button>
            <Button onClick = {decrement}>Decrement</Button>
        </div>
    )
};