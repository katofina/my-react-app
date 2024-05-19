import './ApiOne.css';

function ApiOne(props) {
    return (<div className='oneDiv'>
        <img src={props.item.image} alt="item" className='photoOne'/>
        <div className='textDiv'>
            <p className='pTitle'>{props.item.title}</p>
            <p className='pDesc'>{props.item.description}</p>
            <p className='pTitle'>Price: {props.item.price}</p>
        </div>
    </div>)
};

export default ApiOne;