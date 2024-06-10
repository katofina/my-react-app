import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Every from "./Every";

function ApiEvery() {
    const [resMap, setResMap] = useState([]);
    const {res} = useParams();
    const navigate = useNavigate();

    const fetchData = async () => {
        const response = await fetch('https://fakestoreapi.com/products/');
        const result = await response.json();
        const resInput = result.filter((item) => 
            item.title.toLowerCase().includes(res));
        if(resInput == false) {navigate("/nofound");}
        setResMap(resInput);
    };

    useEffect(() =>{
        fetchData();
        const nick = JSON.parse(localStorage.getItem("authUser")).nick + "_hist";
        let hist = localStorage.getItem(nick);
        if(hist) {
            hist = JSON.parse(hist);
            if(!hist.includes(res)) {hist.push(res)};
            localStorage.setItem(nick, JSON.stringify(hist));
        } else {
            localStorage.setItem(nick, JSON.stringify([res]));
        }
    }, [res])

    return (<Every arr={resMap}/>);
}

export default ApiEvery;