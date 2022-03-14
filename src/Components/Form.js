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
                            <input className="input-usuario" type="text" id="name" name="name"  placeholder="Ingresá tu nombre de usuario"/>
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password <div style={{color: "red", display:"contents"}}> *</div></label>
                            <input className="input-password" type="text" id="password" name="password" placeholder="Ingresá tu password"/>
                        </div>
                    <button type="submit" className="boton-ingresar">Ingresar</button>
                </form>
                )}
            </Formik>
        </>
    )
}

export default Form;