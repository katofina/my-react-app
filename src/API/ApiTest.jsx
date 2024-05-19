import { useEffect } from "react";
import './ApiTest.css';
import { connect } from "react-redux";
import {setData} from '../reducers/DataAction';

function ApiTest(props) {
    const fetchData = async (url) => {
        const response = await fetch(url);

        const result = await response.json();
        props.setData(result);
    };

    useEffect(() => {
        fetchData('https://fakestoreapi.com/products/');
    }, []); //сработает только один раз при самом рендеринге
}

const mapStateToProps = store => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        setData: cards => dispatch(setData(cards))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiTest);