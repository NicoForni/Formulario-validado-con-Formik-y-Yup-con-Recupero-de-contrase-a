import "./Password.css";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";


const Password = () => {

    const digitsOnly = (value) => /^\d+$/.test(value)
    
    const formSchema = Yup.object().shape({
        dni: Yup                    
          .string(),

        ci: Yup                    
          .string(),

        pasaporte: Yup                    
          .string(),

        completar: Yup
        .string(<div className="input-required">Ingrese su contraseña</div>)
        .required(<div className="input-required"><img className="img-required" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/error-2547221-2136999.png" alt="error"></img> Este campo no debe estar vacío</div>) 
        .test('Digits only', <div className="input-required">Debe completar solo con números</div>, digitsOnly)
        
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
                    <button type="submit" className="boton-confirmar">Continuar</button>
                </Form>
            </Formik>
        </>
    )
}

export default Password;