import { useState } from 'react';
import './Header.css';
import Modal from '../Sign/Modal';
import SignIn from '../Sign/SignIn';
import SignUp from '../Sign/SignUp';

function Header() {
    const [isVisIn, setIsVisIn] = useState(false);
    const [isVisUp, setIsVisUp] = useState(false);

    return (
        <div className="headDiv">
            <a className='label' href="/">ReactJS</a>
            <div>
                <button className='buttonSign' onClick={() => setIsVisIn(true)}>Sign In</button>
                <button className='buttonSign' onClick={() => setIsVisUp(true)}>Sign Up</button>
            </div>
            <Modal active={isVisIn} setActive={setIsVisIn}><SignIn/></Modal>
            <Modal active={isVisUp} setActive={setIsVisUp}><SignUp/></Modal>
        </div>
    )
}

export default Header;