import logo from './logo.svg';
import './App.css';
import React,{ useState, useRef } from 'react';

import Appbar from './Appbar/Appbar';
import View from './Appbar/View';
import About from './Appbar/About';
import Hobby from './Appbar/Hobby';
import SearchList from './Appbar/SearchList';
import NavbarRes from './Responsive/NavbarRes';
import MainPage from './Responsive/MainPage';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes,
  Navigate
} from "react-router-dom";

export const CommonContext = React.createContext({});
function App() {
  const [apps] = useState({title:"You Here", color:"#8e4585"});
  return (
    <div className="App">
      <CommonContext.Provider value={{ apps }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Appbar/>} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/about" element={<About />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="*" element={<Navigate to='/' replace ></Navigate>}/>
        </Routes>
      </BrowserRouter>
      </CommonContext.Provider>
      
      {/* <NavbarRes/>
      <MainPage/> */}
    </div>
  );
}

export default App;
