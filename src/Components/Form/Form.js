import "./Form.css";
import React, { useState } from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";


const Formulario = () => {
    const [password, setPassword] = useState(false)
    const a = 1
    
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
                onSubmit={(values) => console.log(values)} >                           
                <Form className="contenedor"> 
                    <h2>Log in</h2>
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
                        <Link to="/recoverypassword"><div className="forgot-password">¿Olvidaste tu contraseña?</div></Link>
                    <button type="submit" className="boton-ingresar">Ingresar</button>
                </Form>                
            </Formik>            
        </>
    )
}

export default Formulario;

