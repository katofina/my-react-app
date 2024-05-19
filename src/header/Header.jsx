import './Header.css';
import Modal from '../Sign/Modal';
import SignIn from '../Sign/SignIn';
import SignUp from '../Sign/SignUp';
import { connect } from 'react-redux';
import {setModalIn} from '../reducers/ModalAction';
import { setModalUp } from '../reducers/ModalUpAction';
import { setAuth } from '../reducers/AuthAction';


function Header(props) {
    return (
        <div className="headDiv">
            <a className='label' href="/">Shop.JS</a>
            {props.auth[0] ? (
                <>
                <div className='row'>
                    <p className='hello'>Hello, {props.auth[1]}</p>
                    <button className='buttonSign'>History</button>
                    <button className='buttonSign'>Favourite</button>
                    <button className='buttonSign' onClick={() => props.setAuth([false, ''])}>Exit</button>
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
        auth: store.auth,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setModalIn: modal => dispatch(setModalIn(modal)),
        setModalUp: modal => dispatch(setModalUp(modal)),
        setAuth: auth => dispatch(setAuth(auth))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);