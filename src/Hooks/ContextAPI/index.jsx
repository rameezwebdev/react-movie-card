import { createContext } from "react";

// step 01
export const BioContext = createContext(); 

// step 02
export const BioProvider = ({children}) => {
    const Name = 'Rameez';

    return <BioContext.Provider value={Name}>
        {children}
        </BioContext.Provider>
};