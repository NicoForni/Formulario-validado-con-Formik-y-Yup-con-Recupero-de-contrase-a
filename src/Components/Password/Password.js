import "./Password.css";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";


const Password = () => {
    
    const formSchema = Yup.object().shape({
        completar: Yup                    
          .string(<div className="input-required">Ingrese su usuario</div>),
        ci: Yup                    
          .string(<div className="input-required">Ingrese su usuario</div>),
        pasaporte: Yup                    
          .string(<div className="input-required">Ingrese su usuario</div>),
        completar: Yup
        .string(<div className="input-required">Ingrese su contraseña</div>)
        //.string(<div className="input-required"><img className="img-required" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/error-2547221-2136999.png" alt="error"></img> Este campo no debe estar vacío</div>),
      });
    
    return(
        <>
            <Formik
                initialValues={{
                dni: "",
                ci: "",
                pasaporte:"",     
                completar:"",
                }}
                validationSchema={formSchema}
                onSubmit={(values) => console.log(values)} >
                <Form className="contenedor-options">
                    <h2>Recuperar contraseña</h2>
                        <div className="documento">
                            <label htmlFor="name">Tipo de documento<div style={{color: "red", display:"contents"}}>*</div></label>
                                <Field className="input-documento" name="dni" as="select">
                                    <option value="dni">DNI</option>
                                    <option value="ci">C.I</option>
                                    <option value="pasaporte">PASAPORTE</option>
                                </Field>
                                <ErrorMessage
                                    name='dni'
                                    component='div'                                
                                />
                        </div>
                    <div className="completar">
                        <label htmlFor="name">Completar <div style={{color: "red", display:"contents"}}> *</div></label>
                            <Field className="input-completar" 
                                type="text" 
                                id="completar" 
                                name="completar"                             
                                placeholder="Ingresá tu documento"
                            />
                            <ErrorMessage
                                name='completar'
                                component='div'                                
                            />
                    </div>
                    <Link to="/"><button type="submit" className="boton-volver">Volver</button></Link>
                    <br/>
                    <br/>
                    <button type="submit" className="boton-confirmar">Confirmar</button>
                </Form>
            </Formik>
        </>
    )
}

export default Password;