import { useRef, useState } from 'react';
import './Sign.css';
import { connect } from 'react-redux';
import {setAuth} from '../reducers/AuthAction';
import { setModalIn } from '../reducers/ModalAction';

function SignIn(props) {
    const [state, setState] = useState({pUser:true, pPass:true});

    const userRef = useRef();
    const passRef = useRef();

    function checkValid(event) {
        event.preventDefault();
        const checkUser = props.store.find((item) => item.nick === userRef.current.value);
        if (checkUser) {
            if(checkUser.pass === passRef.current.value) {
            props.setAuth([true, checkUser['name']]);
            props.setModalIn(false);
                setState({pUser: true, pPass: true});
        }
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

const mapStateToProps = store => {
    return {
        store: store.users,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setAuth: auth => dispatch(setAuth(auth)),
        setModalIn: modal => dispatch(setModalIn(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);