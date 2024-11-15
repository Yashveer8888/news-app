import { useState } from 'react';
import './App.css';
import NavBar from './componenets/NavBar';
import News from './componenets/News';
// import {BrowserRouter,Routes, Switch, Router, Route} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 8;
  const apiKey = "081b99435d2147cfa117ef4e3a1bfeee";
  const [progress, setProgress] = useState(0)
  return (
    <div>
      <NavBar/>
      <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/> 
    </div>
  );
}

export default App;
