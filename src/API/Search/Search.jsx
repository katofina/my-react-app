import '../Search/Search.css';
import searchIcon from '../../icon/searchIcon.svg'
import ApiTest from "../ApiTest";
import { Outlet, useNavigate } from "react-router-dom";

function Search() {
    const navigate = useNavigate();

    function searchRes(event) {
        if(event.key === "Enter") {
            navigate("/search/" + event.target.value);
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