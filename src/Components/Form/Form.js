import "./Form.css";
import React, { useState } from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Formulario = () => {
    const [password, setPassword] = useState(false)
    
    const notify = () => {
        toast.info('Cargando', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
    
    const formSchema = Yup.object().shape({
        name: Yup
          .string(<div className="input-required">Ingrese su usuario</div>)
          .email(<div className="input-required">Su usuario debe ser un correo</div>)
          .required(<div className="input-required"><img className="img-required" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/error-2547221-2136999.png" alt="error"></img> Este campo no debe estar vacío</div>),
        password: Yup
          .string(<div className="input-required">Ingrese su contraseña</div>)
          .min(8,<div className="input-required">Su contraseña debe tener un minimo de 8 caracteres</div>)
          .max(12,<div className="input-required">Su contraseña debe tener un minimo de 12 caracteres</div>)
          .required(<div className="input-required"><img className="img-required" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/error-2547221-2136999.png" alt="error"></img> Este campo no debe estar vacío</div>),
      });
       


    return (
        <>      
            <Formik
                initialValues={{
                name: "",
                password: "",                
                }}
                validationSchema={formSchema}
                onSubmit={(values) => console.log(values) || notify() }>    
                <Form className="contenedor">   
                    <img className="rectangulo" src="/images/rectangulo.svg" alt="rectangulo"></img>
                    <img className="man" src="/images/man.svg" alt="man with books"></img>
                    <img className="logo" src="/images/logo.svg" alt="logo"></img>    
                    <h1 className="title-logo">TEK<span class="bnk">BNK</span></h1>
                    <h2 className="title-sesion">Iniciá Sesión</h2>
                        <div className="usuario">
                            <label htmlFor="name">Usuario <div style={{color: "red", display:"contents"}}> *</div></label>
                            <Field className="input-usuario" 
                                type="text" 
                                id="name" 
                                name="name"                             
                                placeholder="Ingresá tu nombre de usuario"
                            />
                            <ErrorMessage
                                name='name'
                                component='div'                                
                            />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Contraseña{" "}<div style={{ color: "red", display: "contents" }}> *</div></label>
                            <Field className="input-password"
                                type={password ? "password" : "text"}
                                id="password"
                                name="password"
                                placeholder="Ingresá tu contraseña"
                            />
                            <img className="show-hide" src={password ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmVba5IO7cb6dEShqSmQg30K4_fPiV61RNYHJsnBbRh6aNkhZ_H2YfRAFAqXm_amZ6-A&usqp=CAU" : "https://www.pngfind.com/pngs/m/59-593921_png-file-svg-password-eye-icon-png-transparent.png" } alt="img" onClick={() => setPassword(!password)}></img>
                            <ErrorMessage 
                                name="password" 
                                component="div" 
                            />
                        </div>
                    <button type="submit" className="boton-ingresar">Ingresar</button>
                    <Link to="/recoverypassword"><div className="forgot-password">Olvidé mi contraseña</div></Link>                                  
                </Form>          
            </Formik>            
        </>
    )
}

export default Formulario;

