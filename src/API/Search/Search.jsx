import '../Search/Search.css';
import searchIcon from '../../icon/searchIcon.svg'
import ApiTest from "../ApiTest";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setResults} from '../../reducers/ResultsAction';

function Search() {
    const firstCounter = useSelector((store) => store.data.cards);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function searchRes(event) {
        if(event.key === "Enter") {
            const resInput = firstCounter.filter((item) => 
            item.title.toLowerCase().includes(event.target.value));
            dispatch(setResults(resInput));
            if(resInput == false) {navigate("/nofound")}
            else {navigate("/search")}
        }
    };

    return(
        <>
        <div className="divSearch">
            <img src={searchIcon} alt="Search" className="searchIco"/>
                <input type="text" placeholder="Enter for search..." className="inputSearch" onKeyDown={searchRes}/>
        </div>
        <Outlet/>
        <ApiTest/>
        </>
    )
}

export default Search;