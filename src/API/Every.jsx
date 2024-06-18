import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setModalIn } from "../reducers/ModalAction";
import { useNavigate, useParams } from "react-router-dom";
import { Alert } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

function Every(props) {
    const [auth, setAuth] = useState({});
    const [isRemove, setIsRemove] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const dispatch = useDispatch();
    const {res} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = JSON.parse(localStorage.getItem("authUser"));
        setAuth(checkAuth);
    }, [])

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
            setIsAdd(true);
            setTimeout(() => setIsAdd(false), 3000);
        }
    };
    
    function removeOne(rem) {
        const favourite = props.arr;
        const indexOne = favourite.findIndex((item) => item.id === rem.id);
        favourite.splice(indexOne, 1);
        localStorage.setItem(auth.nick, JSON.stringify(favourite));
        setIsRemove(true);
        setTimeout(() => setIsRemove(false), 3000);
    };

    return (<div>
        <ul>
        {props.arr.map((item) => (
            <div className="cardDiv" key={item.id}>
                <img src={item.image} className="itemPhoto" alt="thing" onClick={() => {navigate("/product/" + item.id)}}/>
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
        <div className="alert">
            {isAdd ? (<Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                Add to favourite.
            </Alert>) : null}
            {isRemove ? (<Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                Remove from favourite.
            </Alert>) : null}
        </div>
    </div>)
}

export default Every;