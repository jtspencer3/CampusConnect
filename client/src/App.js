<<<<<<< Updated upstream
import React from 'react';
import './App.css';
// import Navbar from "./Navigation/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { Link } from 'react-router-dom';

function App() {
 return(
  <div>
     <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="about" element={ <About/> } />
          <Route path="contact" element={ <Contact/> } />
      </Routes>
  </div>
 )
  /*const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!data ? "Loading..." : data }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

=======
import React from 'react';
import './App.css';
import Navbar from "./Navigation/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
 return(
  <div>
    <header className = "css-1 " role = "banner">
      <div className="css-l l-123">
        <div className='css-1 l-212 l-823 l-717 l-791'>
          <div className='css-1 l-717 l-123 l-919 l-454 l-202'>
            <div className='css-1 l-478'>
              <div className='css-1 l-101 l-111 l-112'>
                <nav className='css-1 l-478 l-113'><Navbar/></nav>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
        </div>
        </header>
    
    </div>
 );
  /*const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!data ? "Loading..." : data }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

>>>>>>> Stashed changes
export default App;