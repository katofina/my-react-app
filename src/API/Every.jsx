import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setModalIn } from "../reducers/ModalAction";
import ApiOne from './ApiOne';
import Modal from "../Sign/Modal";
import { useParams } from "react-router-dom";

function Every(props) {
    const [one, setOne] = useState({});
    const [auth, setAuth] = useState({});
    const [active, setActive] = useState(false);
    const [reload, setReload] = useState(false);
    const dispatch = useDispatch();
    const {res} = useParams();

    useEffect(() => {
        const checkAuth = JSON.parse(localStorage.getItem("authUser"));
        setAuth(checkAuth);
    }, [reload])

    function checkLogin(add) {
        if(auth.auth === false) {dispatch(setModalIn(true));}
        else {
            let favourite = localStorage.getItem(auth.nick);
            if(favourite) {
                favourite = JSON.parse(favourite);
                const checkOne = favourite.some((item) => item.id === add.id);
                if(checkOne === false) favourite = favourite.concat(add);
            } else {favourite = [add];};
            localStorage.setItem(auth.nick, JSON.stringify(favourite));
        }
    };
    
    function removeOne(rem) {
        const favourite = props.arr;
        const indexOne = favourite.findIndex((item) => item.id === rem.id);
        favourite.splice(indexOne, 1);
        localStorage.setItem(auth.nick, JSON.stringify(favourite));
        setReload(!reload);
    };

    return (<div>
        <ul>
        {props.arr.map((item) => (
            <div className="cardDiv" key={item.id}>
                <img src={item.image} className="itemPhoto" alt="thing" onClick={() => {setOne(item); setActive(true)}}/>
                <div>
                    <p>{item.title}</p>
                    <p className="description">{item.description}</p>
                    <div className="divBottom">
                        <div>
                            <p className="priceP">Price</p>
                            <p className="priceP">{'$' + item.price}</p>
                        </div>
                        <div>{res ? (
                            <button onClick={() => {checkLogin(item);}}>Add to Favourite</button>
                        ) : (
                            <button onClick={() => {removeOne(item)}}>Remove</button>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </ul>
        <Modal active={active} setActive={setActive}><ApiOne item={one}/></Modal>
    </div>)
}

export default Every;