import { useEffect, useState } from "react";
import Modal from '../Sign/Modal';
import ApiOne from '../API/ApiOne';
import { useNavigate } from "react-router-dom";

function Favourite() {
    const [favourite, setFavorite] = useState([]);
    const [nick, setNick] = useState("");
    const [one, setOne] = useState({});
    const [active, setActive] = useState(false);
    const [reload, setReload] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = JSON.parse(localStorage.getItem("authUser"));
        setNick(checkAuth.nick);
        if(checkAuth.auth === true) {
            const fav = JSON.parse(localStorage.getItem(checkAuth.nick));
            if(fav) setFavorite(fav);
            console.log(favourite);
        } else navigate("/");
    }, [reload]);

    function removeOne(rem) {
        const indexOne = favourite.findIndex((item) => item.id === rem.id);
        favourite.splice(indexOne, 1);
        localStorage.setItem(nick, JSON.stringify(favourite));
        setReload(!reload);
    };
    
    if(favourite.length) {
        return(
            <div>
                <ul>
                {favourite.map((item) => (
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
                                    <button onClick={() => {removeOne(item)}}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
            <Modal active={active} setActive={setActive}><ApiOne item={one}/></Modal>
        </div>)
    } else {
        return (
            <p>You haven't added anything to favourite.</p>
        )
    }
}

export default Favourite;