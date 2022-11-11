import './App.css';
import React, { Fragment, useContext }  from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Context } from "../src/context/context";


//Import de vista home
import Home from "./Views/Home/home";

//Import vistas profesor
import PLogin from "./Views/profLogin/pLogin";
import PProfile from "./Views/prof-profile/pProfile";
import PGrades from "./Views/prof-grades/PGrades";
import PNotas from "./Views/prof-notas/pNotas";

//Import vistas estudiantes
import ELogin from "./Views/estLogin/eLogin";
import ENotas from './Views/estNotas/eNotas';

//Import vistas administrador
import AdmnLogin from "./Views/admnLogin/admLogin";
import AdmnHome from './Views/adminHome/admnHome';



function App() {

  const { user } = useContext(Context);
  
  return (
    <Fragment>
      <div className="App-bg">
        <div>

          <Router>
            
            <Routes>

              <Route path="/" element={ <Home/> }> </Route>      {/*Ruta Home*/}

              {/*Rutas de profesor*/}

              <Route path="/profesor/login" element={ <PLogin/> }> </Route> {/*Ruta Login*/}
              <Route path="/profesor/profile/" element={<PProfile/> }>  </Route> {/*Ruta de inicio de profesor*/}
              <Route path="/profesor/cursos" element={ <PGrades/>}> </Route> {/*Ruta cursos de profesor*/}
              <Route path="/profesor/notas" element={ <PNotas/>}> </Route> {/*Ruta de edición de notas puestas por profesores*/}
              
              {/* Rutas de estudiantes */}
              
              <Route path="/estudiante/login" element={ <ELogin/> }> </Route> {/*Ruta Login de estudiante*/}
              <Route path="/estudiante/notas" element={ <ENotas/> }> </Route> {/*Ruta de perfil y notas del estudiante*/}
              
              {/* Rutas de administrador */}
              <Route path="/administrador/login" element={ <AdmnLogin/> }> </Route>
              <Route path="/administrador/inicio" element={ <AdmnHome/> }></Route>

            </Routes>

          </Router>

        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
