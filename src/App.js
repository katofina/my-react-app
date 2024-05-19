import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './header/Header.jsx';
import Footer from "./Footer/Footer.jsx";
import './App.css';
import Search from "./API/Search/Search.jsx";

function App() {
  return (
    <BrowserRouter>
    <div className='wrapper'>
            <header><Header/></header>
            <main>
            <Routes>
              <Route path="/" element={<Search/>}/>
              <Route path="/history"/>
              <Route path="/favourite"/>
            </Routes>
            </main>
            <footer><Footer/></footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
