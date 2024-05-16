import './NoFound.css';
import noFoundImg from '../../background/noResults.png';

export default function NoFound() {
    return (
        <div className="divFound">
            <img src={noFoundImg} alt="noFound" className="noFound"/>
        </div>
    )
}