import { useRef, useState } from "react";

export const UseRefs = () => {

    const [userName, setUserName] = useState('');
    const [Password, setpassword] = useState('');

    const user = useRef(null);
    const password = useRef(null);

     
    const handlesubmition = (e) => {

        e.preventDefault();
 
        

     setUserName(user.current.value);
     setpassword(password.current.value);  
    

    };


    return<> 
     <form onSubmit={handlesubmition}>
        <label htmlFor="username">User Name: </label>
        <input type="text" name="username" id="username" ref={user} />
         <br />
        <label htmlFor="Password">Password: </label>
        <input type="password" name="Password" id="Password" ref={password}/>

        <button type="submit">Submit</button>
     </form>

    

    <section>
        <h1>{userName}</h1>
        <h1>{Password}</h1>
    </section>

    </>

};