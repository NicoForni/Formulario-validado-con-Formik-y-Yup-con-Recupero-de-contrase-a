import "./Form.css";
import React from "react";
import {Formik} from "formik";

const Form = () => {
    

    return (
        <>
            <Formik>
                {() => (            
                <form className="contenedor"> 
                    <h2>Log in</h2>
                        <div className="usuario">
                            <label htmlFor="name">Usuario <div style={{color: "red", display:"contents"}}> *</div></label>
                            <input className="input-usuario" type="text" id="name" name="name" minLength={6} placeholder="Ingresá tu nombre de usuario"/>
                        </div>
                        <div className="password">
                            <label htmlFor="password">Contraseña <div style={{color: "red", display:"contents"}}> *</div></label>
                            <input className="input-password" type="password" id="password" name="password" placeholder="Ingresá tu contraseña"/>
                        </div>
                        <div className="forgot-password">¿Olvidaste tu contraseña?</div>
                    <button type="submit" className="boton-ingresar">Ingresar</button>
                </form>
                )}
            </Formik>
        </>
    )
}

export default Form;