import './App.css';
import React, { Fragment }  from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


//Import de vistas

import Home from "./Views/Home/home";
import PLogin from "./Views/profLogin/pLogin";
import ELogin from "./Views/estLogin/eLogin";


function App() {
  return (
    <Fragment>
      <div className="App-bg">
        <div>

          <Router>
            
            <Routes>

              <Route path="/" element={ <Home/> }> </Route>      {/*Ruta Home*/}

              <Route path="/profesor/login" element={ <PLogin/> }> </Route> {/*Ruta Login de profesor*/}

              <Route path="/estudiante/login" element={ <ELogin/> }> </Route> {/*Ruta Login de estudiante*/}

            </Routes>

          </Router>

        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
