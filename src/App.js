
import './App.css';
import React from "react";
import Formulario from './Components/Form/Form';
import Password from "./Components/Password/Password";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Formulario/>}/>
          <Route path='/recoverypassword' element={<Password/>} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
