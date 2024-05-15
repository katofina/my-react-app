import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './ApiTest.css';
import Search from "./Search/Search";

function ApiTest() {
    const [data, setData] = useState([]);

    const fetchData = async (url) => {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
    };

    useEffect(() => {
        fetchData('https://fakestoreapi.com/products/');
        console.log('useeffect');
    }, []); //сработает только один раз при самом рендеринге

    return (
        <Search data={data}/>
    )
}

export default ApiTest;