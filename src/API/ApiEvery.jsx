import { useSelector } from "react-redux";
import { setModalIn } from "../reducers/ModalAction";
import ApiOne from './ApiOne';
import { useEffect, useState } from "react";
import Modal from "../Sign/Modal";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ApiEvery() {
    const firstCounter = useSelector((store) => store.data.cards);
    const [active, setActive] = useState(false);
    const [one, setOne] = useState({});
    const [resMap, setResMap] = useState([]);
    const dispatch = useDispatch();
    const {res} = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        console.log(res);
        const resInput = firstCounter.filter((item) => 
            item.title.toLowerCase().includes(res));
            if(resInput == false) {navigate("/nofound");}
        setResMap(resInput);
    }, [res])

    function checkLogin(add) {
        const checkAuth = JSON.parse(localStorage.getItem("authUser"));;
        if(checkAuth.auth === false) {dispatch(setModalIn(true));}
        else {
            let favourite = localStorage.getItem(checkAuth.nick);
            console.log(favourite);
            if(favourite) {
                favourite = JSON.parse(favourite);
                const checkOne = favourite.some((item) => item.id === add.id);
                if(checkOne === false) favourite = favourite.concat(add);
            } else {favourite = [add];};
            localStorage.setItem(checkAuth.nick, JSON.stringify(favourite));
        }
    }

        return (<div>
            <ul>
            {resMap.map((item) => (
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
                            <div>
                                <button onClick={() => {checkLogin(item);}}>Add to Favourite</button>
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