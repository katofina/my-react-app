import { useRef, useState } from "react";

export default function SignUp() {
    const [state, setState] = useState({nameBool:true, passBool:true, userBool:true});

    const userRef = useRef();
    const passRef = useRef();
    const nameRef = useRef();

    function checkValid(event) {
        event.preventDefault();
        const nameBool = (/^[a-zA-Z'-]+$/).test(nameRef.current.value);
        const passBool = (/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/).test(passRef.current.value);
        const userBool = (/^[^0-9]\w+$/).test(userRef.current.value);
        setState({nameBool, passBool, userBool});
    };

    return (
        <div className="divSignIn">
            <p className='pSign'>Sign Up</p>
            <form onSubmit={checkValid} className='formSignIn'>
                <div className='divForInput'>
                    <input type="text" ref={nameRef} className='forInput'  placeholder='First name'/>
                    <p className="pCheck">
                        {state.nameBool ? null : ("Enter your name please")}
                    </p>
                    <input type="text" ref={userRef} className='forInput'  placeholder='Username'/>
                    <p className="pCheck">
                        {state.userBool ? null : ("Use only letters and numbers")}
                    </p>
                    <input type="password" ref={passRef} className='forInput'  placeholder='Password'/>
                    <p className="pCheck">
                        {state.passBool ? null : ("String must have at least one number and 6-16 charachters")}
                    </p>
                </div>
                <button className='buttonSign'>Sign Up</button>
            </form>
        </div>
    )
};