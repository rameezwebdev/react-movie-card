import { forwardRef, useId, useRef, useState } from "react";

export const UseForward = () => {
    
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const userName = useRef(null);
    const Password = useRef(null);

    const handlersubmition = (e) => {
        e.preventDefault();

        setName(userName.current.value);
        setPassword(Password.current.value);
    };

    return (
        <>
            <form onSubmit={handlersubmition}>
                <BeforReact19 label="userName" ref={userName} />

                <BeforReact19 label="password" ref={Password} />

                <button type="submit">Submit</button>
            </form>

            <p>Name: {name}</p>
            <p>Password: {password}</p>
        </>
    );
};

const BeforReact19 = forwardRef((props, ref) => {
    const id = useId();

    return (
        <div>
            <label htmlFor={id}>{props.label}</label>

            <input
                id={id}
                type={props.label === "password" ? "password" : "text"}
                ref={ref}
            />
        </div>
    );
});

