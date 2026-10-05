import { useCustomContext } from "./index.jsx"; 
export const Home = () => {
    const myName = useCustomContext(); 
    return (
        <h1>Hello, my name is {myName}</h1>
    )
};
