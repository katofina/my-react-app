import { useEffect, useState } from "react";
import '../Search/Search.css';
import searchIcon from '../../icon/searchIcon.svg'
import ApiEvery from "../ApiEvery";

function Search(props) {
    const [results, setResults] = useState(null);
    console.log(results);

    function searchRes(event) {
        if (event.key == 'Enter') {
            const resInput = props.data.filter((item) => 
            item.title.toLowerCase().includes(event.target.value));
            setResults(resInput);
            console.log(results);
            console.log(event.target.value);
        }
    };

    return(
        <>
        <div className="divSearch">
            <img src={searchIcon} alt="Search" className="searchIco"/>
            <input type="text" placeholder="Enter for search..." className="inputSearch" onKeyDown={searchRes}/>
        </div>
        {results ? (
            <ApiEvery data={results}/>
        ) : (
            <ApiEvery data={props.data}/>
        )}
        </>
    )
}

export default Search;