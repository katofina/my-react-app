import './Header.css';

function Header() {
    return (
        <div className="headDiv">
            <a className='label'>ReactJS</a>
            <div>
                <a className='aSign'>Login</a>
                <a className='aSign'>Sign Up</a>
            </div>
        </div>
    )
}

export default Header;