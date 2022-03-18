
import './App.css';
import React from "react";
import Formulario from './Components/Form/Form';
import Password from "./Components/Password/Password";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer 
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
