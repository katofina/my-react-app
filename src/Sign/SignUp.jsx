import { useRef, useState } from "react";
import { connect } from "react-redux";
import {addUser} from '../reducers/UserAction';
import {setModalUp} from '../reducers/ModalUpAction';
import { setAuth } from "../reducers/AuthAction";

function SignUp(props) {
    const [state, setState] = useState({nameBool:true, passBool:true, userBool:true, checkSame: false});

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
        const checkSame = props.store.some((item) => item.nick === userRef.current.value);
        console.log(props);
        setState({nameBool, passBool, userBool, checkSame});
        if (nameBool && passBool && userBool && (!checkSame)) {
            props.addUser({name, nick, pass});
            props.setModalUp(false);
            props.setAuth([true, name]);
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

const mapStateToProps = store => {
    return {
        store: store.users,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addUser: user => dispatch(addUser(user)),
        setModalUp: modal => dispatch(setModalUp(modal)),
        setAuth: auth => dispatch(setAuth(auth))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
