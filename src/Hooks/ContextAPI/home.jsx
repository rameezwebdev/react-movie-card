import { useContext } from "react";
import { BioContext } from "./index.jsx"; 
export const Home = () => {
    const myName = useContext(BioContext); 
    return (
        <h1>Hello, my name is {myName}</h1>
    )
};
