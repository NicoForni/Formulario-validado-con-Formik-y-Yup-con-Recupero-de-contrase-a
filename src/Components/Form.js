import "./Form.css";
import React, { useState } from "react";
import {Formik} from "formik";

const Form = () => {
    const [password, setPassword] = useState(false)

 

    return (
        <>
            <Formik>
                {() => (            
                <form className="contenedor"> 
                    <h2>Log in</h2>
                        <div className="usuario">
                            <label htmlFor="name">Usuario <div style={{color: "red", display:"contents"}}> *</div></label>
                            <input className="input-usuario" 
                            type="text" 
                            id="name" 
                            name="name" 
                            minLength={6}
                            placeholder="Ingresá tu nombre de usuario"/>
                        </div>
                        <div className="password">
                            <label htmlFor="password">Contraseña <div style={{color: "red", display:"contents"}}> *</div></label>
                            <input className="input-password" 
                            type={password ? "password" : "text"}
                            id="password" 
                            name="password" 
                            placeholder="Ingresá tu contraseña"                                                                                    
                            />
                            <span><img className="show-hide" src={password ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmVba5IO7cb6dEShqSmQg30K4_fPiV61RNYHJsnBbRh6aNkhZ_H2YfRAFAqXm_amZ6-A&usqp=CAU" : "https://www.pngfind.com/pngs/m/59-593921_png-file-svg-password-eye-icon-png-transparent.png"} alt="img" onClick={() => setPassword(!password)}></img></span>                            
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