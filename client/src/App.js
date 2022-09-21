import './App.css';
import React, { Fragment }  from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


//Import de vistas

import Home from "./Views/Home/home";


function App() {
  return (
    <Fragment>
      <div className="App">
        <div className="Container">

          <Router>
            
            <Routes>

              <Route path="/" element={ <Home/> }></Route>      {/*Ruta Home*/}

            </Routes>

          </Router>

        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
