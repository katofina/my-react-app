import { useRef, useState } from 'react';
import './Sign.css';

function SignIn() {
    const [state, setState] = useState({pUser:true, pPass:true});

    const userRef = useRef();
    const passRef = useRef();

    function checkValid(event) {
        event.preventDefault();
        const checkLocal = localStorage.getItem("users").split(";");
        checkLocal.pop();
        console.log(checkLocal);
        const checkEmail = checkLocal.map((item) => JSON.parse(item)).find((item) => item.nick === userRef.current.value);
        console.log(checkEmail);
        if (checkEmail) {
            if (checkEmail.pass === passRef.current.value) {
                localStorage.setItem("authUser", JSON.stringify({name: checkEmail.name, auth: true, nick: checkEmail.nick}));
                setState({pUser: true, pPass: true});
                window.location = '/';}
            else setState({pUser: true, pPass: false});
        } else setState({pUser: false, pPass: true});
    };

    return (
        <div className="divSignIn">
            <p className='pSign'>Sign In</p>
            <form onSubmit={checkValid} className='formSignIn'>
                <div className='divForInput'>
                    <input type="text" ref={userRef} className='forInput'  placeholder='Username'/>
                    <p className='pCheck'>
                        {state.pUser ? null : ("This username not found.")}
                    </p>
                    <input type="password" ref={passRef} className='forInput'  placeholder='Password'/>
                    <p className='pCheck'>
                        {state.pPass ? null : ("The password is incorrect.")}
                    </p>
                </div>
                <button className='buttonSign'>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn;