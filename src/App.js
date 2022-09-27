import logo from './logo.svg';
import './App.css';
import React,{ useState, useRef } from 'react';
import Form from './form';
import Appbar from './Appbar/Appbar';
import View from './View';
import About from './Appbar/About';
import Hobby from './Appbar/Hobby';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes,
  Navigate
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Appbar/>} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/about" element={<About />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="*" element={<Navigate to='/' replace ></Navigate>}/>
        </Routes>
        
      </BrowserRouter>
      



      

    </div>
  );
}

export default App;
