import { connect } from "react-redux";
import { setModalIn } from "../reducers/ModalAction";
import ApiOne from './ApiOne';
import { useState } from "react";
import Modal from "../Sign/Modal";

function ApiEvery(props) {
    const [active, setActive] = useState(false);
    const [one, setOne] = useState({});
    console.log(props);

    function checkLogin() {
        if (props.auth[0] === false) {props.setModalIn(true);}
        else {
            
        }
    }

    return (<div>
            <ul>
            {props.data.map((item) => (
                <div className="cardDiv" key={item.id}>
                    <img src={item.image} className="itemPhoto" alt="thing" onClick={() => {setActive(true); setOne(item)}}/>
                    <div>
                        <p>{item.title}</p>
                        <p className="description">{item.description}</p>
                        <div className="divBottom">
                            <div>
                                <p className="priceP">Price</p>
                                <p className="priceP">{'$' + item.price}</p>
                            </div>
                            <div>
                                <button onClick={checkLogin}>Add to Favourite</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </ul>
        <Modal active={active} setActive={setActive}><ApiOne item={one}/></Modal>
    </div>)
}

const mapStateToProps = store => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        setModalIn: modal => dispatch(setModalIn(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiEvery);