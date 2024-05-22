import { Routes, Route } from "react-router-dom";
import './App.css';
import History from './Main/History.jsx';
import Favourite from "./Main/Favourite.jsx";
import Search from './API/Search/Search.jsx';
import {Layout} from './Layout.jsx';
import Main from "./Main/Main";
import ApiEvery from "./API/ApiEvery";
import NoFound from "./API/Search/NoFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<Search/>}>
            <Route index element={<Main/>}/>
            <Route path="search/:res" element={<ApiEvery/>}/>
            <Route path="nofound" element={<NoFound/>}/>
          </Route>
          <Route path="history" element={<History/>}/>
          <Route path="favourite" element={<Favourite/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
