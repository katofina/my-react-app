import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NoFound from './Search/NoFound';
import Every from "./Every";
import {useQuery} from 'react-query';

function ApiEvery() {
    const {res} = useParams();
    const { isLoading, error, data } = useQuery(
        'cards',
        () => fetch(`https://fakestoreapi.com/products/`)
        .then((res) => res.json())
    );
    let dataFilter;

    if(data) {dataFilter = data.filter((item) => item.title.toLowerCase().includes(res));};

    useEffect(() =>{
        const nick = JSON.parse(localStorage.getItem("authUser")).nick + "_hist";
        let hist = localStorage.getItem(nick);
        if (hist) {
            hist = JSON.parse(hist);
            if(!hist.includes(res)) {hist.push(res)};
            localStorage.setItem(nick, JSON.stringify(hist));
        } else {
            localStorage.setItem(nick, JSON.stringify([res]));
        }
    }, [res])

    if (isLoading) return (<p>Loading...</p>)
    if (error) return (<p>Error: {error.message}</p>)

    return (
        <>
            {dataFilter.length? (
                <Every arr={dataFilter}/>
                    ) : (
                <NoFound/>
            )}
        </>
    );
}

export default ApiEvery;