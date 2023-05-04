import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from './App';
import About from './components/About';
import Accommodations from './components/Accommodations';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import Promos from './components/Promos';
import Reviews from './components/Reviews';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Nav />
    <App />
    <About />
    <Accommodations />
    <Contact />
    <Gallery />
    <Promos />
    <Reviews />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
