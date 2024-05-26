import './Modal.css';
import { useDispatch } from 'react-redux';
import { closeModal } from '../reducers/CloseModalAction';

function Modal({active, children}) {
    const dispatch = useDispatch();

    return <div className={active ? "modal active" : "modal"} onClick={() => dispatch(closeModal())}>
        <div className='inModal' onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
}

export default Modal;