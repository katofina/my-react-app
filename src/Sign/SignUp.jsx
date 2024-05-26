import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from '../reducers/CloseModalAction';

function SignUp({reload, setReload}) {
    const [state, setState] = useState({nameBool:true, passBool:true, userBool:true, checkSame: false});

    const dispatch = useDispatch();

    const userRef = useRef();
    const passRef = useRef();
    const nameRef = useRef();

    function checkValid(event) {
        const name = nameRef.current.value;
        const nick = userRef.current.value;
        const pass = passRef.current.value;
        event.preventDefault();
        const nameBool = (/^[a-zA-Z'-]+$/).test(name);
        const passBool = (/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/).test(pass);
        const userBool = (/^[^0-9]\w+$/).test(nick);
        const users = localStorage.getItem("users");
        const checkSame = users.includes(nick);
        setState({nameBool, passBool, userBool, checkSame});
        if (nameBool && passBool && userBool && (!checkSame)) {
            const usersString = users + JSON.stringify({name: name, nick: nick, pass: pass}) + ";";
            localStorage.setItem("users", usersString);
            localStorage.setItem("authUser", JSON.stringify({name: name, auth: true, nick: nick}));
            dispatch(closeModal());
            setReload(!reload);
        };
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
                        {state.checkSame ? ("This username already exist.") : null}
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

export default SignUp;
