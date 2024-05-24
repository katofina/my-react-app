import './Header.css';
import Modal from '../Sign/Modal';
import SignIn from '../Sign/SignIn';
import SignUp from '../Sign/SignUp';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {setModalIn} from '../reducers/ModalAction';
import {setModalUp} from '../reducers/ModalUpAction';

function Header() {
    const [auth, setAuth] = useState({auth: false, name: ""});
    const navigate = useNavigate();
    const modal = useSelector((store) => store.modal);
    const dispatch = useDispatch();
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const checkLocal = JSON.parse(localStorage.getItem("authUser"));
        if(checkLocal.auth === true) {setAuth({auth: checkLocal.auth, name: checkLocal.name});}
    }, [reload]);

    return (
        <div className="headDiv">
            <Link to="/" className='label'>Shop.JS</Link>
            {auth.auth ? (
                <>
                <div className='row'>
                    <p className='hello'>Hello, {auth.name}</p>
                    <Link to="/history" className='buttonSign'>History</Link>
                    <Link to="/favourite" className='buttonSign'>Favourite</Link>
                    <button className='buttonSign' onClick={() => {
                        setAuth(false); localStorage.setItem("authUser", JSON.stringify({name: "", auth: false}));
                        navigate('/')}}>
                        Log Out
                    </button>
                </div>
                </>
            ) : (
                <div>
                    <button className='buttonSign' onClick={() => dispatch(setModalIn(true))}>Sign In</button>
                    <button className='buttonSign' onClick={() => dispatch(setModalUp(true))}>Sign Up</button>
                </div>
            )}
            <Modal active={modal.modalIn}><SignIn reload={reload} setReload={setReload}/></Modal>
            <Modal active={modal.modalUp}><SignUp reload={reload} setReload={setReload}/></Modal>
        </div>
    )
}

export default Header;