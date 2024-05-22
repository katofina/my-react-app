import './Header.css';
import Modal from '../Sign/Modal';
import SignIn from '../Sign/SignIn';
import SignUp from '../Sign/SignUp';
import { connect } from 'react-redux';
import {setModalIn} from '../reducers/ModalAction';
import { setModalUp } from '../reducers/ModalUpAction';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    const [auth, setAuth] = useState({auth: false, name: ""});

    useEffect(() => {
        const checkLocal = JSON.parse(localStorage.getItem("authUser"));
        if(checkLocal.auth === true) {setAuth({auth: checkLocal.auth, name: checkLocal.name});}
        console.log(auth);
    }, []);

    return (
        <div className="headDiv">
            <Link to="/" className='label'>Shop.JS</Link>
            {auth.auth ? (
                <>
                <div className='row'>
                    <p className='hello'>Hello, {auth.name}</p>
                    <Link to="/history" className='buttonSign'>History</Link>
                    <Link to="/favourite" className='buttonSign'>Favourite</Link>
                    <button className='buttonSign' onClick={() => {setAuth(false); localStorage.setItem("authUser", JSON.stringify({name: "", auth: false}))}}>Exit</button>
                </div>
                </>
            ) : (
                <div>
                    <button className='buttonSign' onClick={() => props.setModalIn(true)}>Sign In</button>
                    <button className='buttonSign' onClick={() => props.setModalUp(true)}>Sign Up</button>
                </div>
            )}
            <Modal active={props.modal.modalIn} setActive={props.setModalIn}><SignIn/></Modal>
            <Modal active={props.modal.modalUp} setActive={props.setModalUp}><SignUp/></Modal>
        </div>
    )
}

const mapStateToProps = store => {
    return {
        modal: store.modal,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setModalIn: modal => dispatch(setModalIn(modal)),
        setModalUp: modal => dispatch(setModalUp(modal)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);