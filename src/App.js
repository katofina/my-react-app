import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './header/Header.jsx';
import Footer from "./Footer/Footer.jsx";
import SignIn from "./Sign/SignIn.jsx";
import ApiTest from "./API/ApiTest.jsx";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className='wrapper'>
            <header><Header/></header>
            <main>
            <Routes>
              <Route path="/" element={<ApiTest />}/>
            </Routes>
            </main>
            <footer><Footer/></footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
