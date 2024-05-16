import { useRef } from 'react';
import './Sign.css';

export default function SignIn() {
    const userRef = useRef();
    const passRef = useRef();

    function checkValid(event) {
        event.preventDefault();
    };

    return (
        <div className="divSignIn">
            <p className='pSign'>Sign In</p>
            <form onSubmit={checkValid} className='formSignIn'>
                <div className='divForInput'>
                    <input type="text" ref={userRef} className='forInput'  placeholder='Username'/>
                    <p className='pCheck'></p>
                    <input type="password" ref={passRef} className='forInput'  placeholder='Password'/>
                    <p className='pCheck'></p>
                </div>
                <button className='buttonSign'>Sign In</button>
            </form>
        </div>
    )
}