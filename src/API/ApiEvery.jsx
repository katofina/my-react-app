import { useSelector } from "react-redux";
import { setModalIn } from "../reducers/ModalAction";
import ApiOne from './ApiOne';
import { useState } from "react";
import Modal from "../Sign/Modal";
import { useDispatch } from "react-redux";

function ApiEvery() {
    const [active, setActive] = useState(false);
    const [one, setOne] = useState({});
    const store = useSelector((store) => store.res.res);
    const dispatch = useDispatch();

    function checkLogin() {
        const checkAuth = JSON.parse(localStorage.getItem("authUser"));  console.log(checkAuth);
        if(checkAuth.auth === false) {dispatch(setModalIn(true));}
        else {
            let favourite = localStorage.getItem(checkAuth.nick);
            if(favourite) {
                console.log(favourite);
                favourite = JSON.parse(favourite);
                const checkOne = favourite.some((item) => item.id === one.id);
                if(checkOne === false) favourite = favourite.concat(one);
            } else favourite = [one];
            localStorage.setItem(checkAuth.nick, JSON.stringify(favourite));
            console.log(favourite);
        }
    }

        return (<div>
            <ul>
            {store.map((item) => (
                <div className="cardDiv" key={item.id}>
                    <img src={item.image} className="itemPhoto" alt="thing" onClick={() => {setActive(true)}}/>
                    <div>
                        <p>{item.title}</p>
                        <p className="description">{item.description}</p>
                        <div className="divBottom">
                            <div>
                                <p className="priceP">Price</p>
                                <p className="priceP">{'$' + item.price}</p>
                            </div>
                            <div onClick={() => setOne(item)}>
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

export default ApiEvery;