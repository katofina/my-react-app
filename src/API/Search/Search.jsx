import { useState } from "react";
import '../Search/Search.css';
import searchIcon from '../../icon/searchIcon.svg'
import ApiEvery from "../ApiEvery";
import NoFound from "./NoFound";
import Main from "../../Main/Main";
import ApiTest from "../ApiTest";
import { connect } from "react-redux";

function Search(props) {
    const [results, setResults] = useState("main");

    function searchRes(event) {
        if (event.key === 'Enter') {
            const resInput = props.store.data.cards.filter((item) => 
            item.title.toLowerCase().includes(event.target.value));
            setResults(resInput);
        }
    };

    return(
        <>
        <div className="divSearch">
            <img src={searchIcon} alt="Search" className="searchIco"/>
            <input type="text" placeholder="Enter for search..." className="inputSearch" onKeyDown={searchRes}/>
        </div>
        {(results === "main") ? (
            <Main/>
        ) : (results.length) ? (
            <ApiEvery data={results} store={props}/>
        ) : (
            <NoFound/>
        )}
        <ApiTest/>
        </>
    )
}

const mapStateToProps = store => {
    return {
        store: store,
    }
}

export default connect(mapStateToProps)(Search);