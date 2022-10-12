import './App.css';
import React, { Fragment, useContext }  from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Context } from "../src/context/context";


//Import de vistas

import Home from "./Views/Home/home";
import PLogin from "./Views/profLogin/pLogin";
import ELogin from "./Views/estLogin/eLogin";
import PProfile from "./Views/prof-profile/pProfile";
import ENotas from './Views/estNotas/eNotas';



function App() {

  const { user } = useContext(Context);
  
  return (
    <Fragment>
      <div className="App-bg">
        <div>

          <Router>
            
            <Routes>

              <Route path="/" element={ <Home/> }> </Route>      {/*Ruta Home*/}

              <Route path="/profesor/login" element={ <PLogin/> }> </Route> {/*Ruta Login de profesor*/}

              <Route path="/profesor/profile/" element={<PProfile/> }>  </Route> {/*Ruta Profile de profesor, si no hay correo no hay profesor y manda al home*/}

              <Route path="/estudiante/login" element={ <ELogin/> }> </Route> {/*Ruta Login de estudiante*/}

              <Route path="/estudiante/notas" element={ user ?  <ENotas/> : <Home/> }> </Route> {/*Ruta de perfil y notas del estudiante  si no hay, manda al home*/}

            </Routes>

          </Router>

        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
