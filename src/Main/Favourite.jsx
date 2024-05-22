import { useEffect, useState } from "react";
import Modal from '../Sign/Modal';
import ApiOne from '../API/ApiOne';

function Favourite() {
    const [favourite, setFavorite] = useState([]);
    const [one, setOne] = useState();
    const [active, setActive] = useState(false);

    useEffect(() => {
        const checkAuth = JSON.parse(localStorage.getItem("authUser"));
        console.log(checkAuth);
        if(checkAuth.auth === true) {
            const fav = JSON.parse(localStorage.getItem(checkAuth.nick));
            setFavorite(fav);
            console.log(favourite);
        }
    }, [])

    function removeOne() {
        const indexOne = favourite.findIndex((item) => item.id === one.id);
        console.log(indexOne);
        console.log(favourite);
        //localStorage.setItem(checkAuth.nick, favourite);
    }
    
    return(
        <div>
            <ul>
            {favourite.map((item) => (
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
                                <button onClick={removeOne}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </ul>
        <Modal active={active} setActive={setActive}><ApiOne item={one}/></Modal>
    </div>);
}

export default Favourite;