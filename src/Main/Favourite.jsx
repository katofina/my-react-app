import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Every from "../API/Every";

function Favourite() {
    const [favourite, setFavorite] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = JSON.parse(localStorage.getItem("authUser"));
        if(checkAuth.auth === true) {
            const fav = JSON.parse(localStorage.getItem(checkAuth.nick));
            if(fav) setFavorite(fav);
        } else navigate("/");
    }, []);
    
    if(favourite.length) {
        return(<Every arr={favourite}/>)
    } else {
        return (
            <p>You haven't added anything to favourite.</p>
        )
    }
}

export default Favourite;