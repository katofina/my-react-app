import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './ApiTest.css';
import Search from "./Search/Search";

function ApiTest() {
    const [data, setData] = useState([]);

    const fetchData = async (url) => {
        const response = await fetch(url);

        const result = await response.json();
        setData(result);
    };

    useEffect(() => {
        fetchData('https://fakestoreapi.com/products/');
    }, []); //сработает только один раз при самом рендеринге

    return (
        <Search data={data}/>
    )
}

export default ApiTest;