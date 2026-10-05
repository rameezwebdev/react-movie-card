import { createContext, use, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('dark');

    const handleToogle = () => {
        return setTheme((pre) => pre === 'dark' ? 'light' : 'dark' );
    };

   return  (
    <ThemeContext.Provider value={{theme, handleToogle}}>
            {children}
    </ThemeContext.Provider>
   )
};

export const LightDark = () => {
    const {theme, handleToogle} = use(ThemeContext);
    return (
        <div className={`p-4 h-lvh flex flex-col justify-center items-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-white text-black'} `}>
            <h1>Dark Light Mode Website</h1>
            <p>This is a Professional Websita</p>
            <button className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}  onClick={handleToogle}>{theme === 'dark' ? 'Light Mode ' : 'Dark Mode'}</button>
        </div>
    )
};