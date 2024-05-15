import ApiTest from './API/ApiTest';
import './App.css';
import Footer from './Footer/Footer';
import Header from './header/Header';

function App() {
  return (
    <div className='wrapper'>
      <header><Header/></header>
      <main>
        <ApiTest/>
      </main>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;
