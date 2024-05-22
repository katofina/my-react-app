import { useEffect } from "react";
import './ApiTest.css';
import { useDispatch } from "react-redux";
import {setData} from '../reducers/DataAction';

function ApiTest() {
    const dispatch = useDispatch();
    const fetchData = async (url) => {
        const response = await fetch(url);

        const result = await response.json();
        dispatch(setData(result));
    };

    useEffect(() => {
        fetchData('https://fakestoreapi.com/products/');
    }, []); //сработает только один раз при самом рендеринге
}

export default ApiTest;