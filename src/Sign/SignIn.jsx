import { useRef, useState } from 'react';
import './Sign.css';
import { useDispatch } from 'react-redux';
import { closeModal } from '../reducers/CloseModalAction';

function SignIn({reload, setReload}) {
    const [state, setState] = useState({pUser:true, pPass:true});
    const dispatch = useDispatch();

    const userRef = useRef();
    const passRef = useRef();

    function checkValid(event) {
        event.preventDefault();
        const checkLocal = localStorage.getItem("users").split(";");
        checkLocal.pop();
        const checkEmail = checkLocal.map((item) => JSON.parse(item)).find((item) => item.nick === userRef.current.value);
        if (checkEmail) {
            if (checkEmail.pass === passRef.current.value) {
                localStorage.setItem("authUser", JSON.stringify({name: checkEmail.name, auth: true, nick: checkEmail.nick}));
                setState({pUser: true, pPass: true});
                dispatch(closeModal());
                userRef.current.value = "";
                passRef.current.value = "";
                setReload(!reload);}
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
                <button className='buttonSign buttonSign_width'>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn;