import './Search.css';
import '../ApiTest.css'
import { Outlet, useNavigate } from "react-router-dom";

function Search() {
    const navigate = useNavigate();

    function searchRes(event) {
        if(event.key === "Enter") {
            if(event.target.value) navigate("/search/" + event.target.value);
            else navigate("/nofound");
            
        }
    };

    return(
        <>
        <div className="divSearch">
            <img src="/icons/searchIcon.svg" alt="Search" className="searchIco"/>
            <input type="text" placeholder="Enter for search..." className="inputSearch" onKeyDown={searchRes}/>
        </div>
        <Outlet/>
        </>
    )
}

export default Search;