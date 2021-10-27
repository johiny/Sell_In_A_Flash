import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import Inputs from "components/inputs";
import Boton from "components/BotonJ";
import logo from "media/logo.png"
import "styles/estilos.css"

const Registrar = () => {

    const [nombres, setNombres] = useState();
    const [apellidos, setApellidos] = useState();
    const [email, setEmail] = useState();
    const [contraseña, setContraseña] = useState();
    
    const enviarDatos = ()=>{
        console.log(
            'nombres',nombres,
            'apellidos',apellidos,
            'email',email,
            'contraseña',contraseña)
    }
   


    return (
        <div className="body_login">
            <header>
                <img src={logo} alt="logo" className="logo"/>
            </header>
                <form className="formulario">
                    <div>
                        <h1 className="titulo_login">Registrate</h1>
                    </div>
                    <div className="inputsRe">
                        <div>
                            <p className="p">Nombres</p>
                            <div className="caja-input">
                            <input                             
                            type='text'
                            placeholder='nombres'
                            value={nombres}
                            onChange={(e)=>{setNombres(e.target.value)}}/>
                            </div>
                        
                        </div>
                        <div>
                            <p>Apellidos</p>
                            <div className="caja-input">
                            <input 
                            type='text' 
                            placeholder='apellido'
                            value={apellidos}
                            onChange={(e)=>{setApellidos(e.target.value)}}/>
                            </div>
                        </div>
                    </div>
                    <div className="inputsRe">
                        <div>
                            <p className="p">Correo</p>
                            <div className="caja-input">
                            <input 
                            type='email' 
                            placeholder='pepito@gmail.com'
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div>
                            <p>Contraseña</p>
                            <div className="caja-input">
                            <input 
                            type='password' 
                            placeholder='contraseña'
                            value={contraseña}
                            onChange={(e)=>{setContraseña(e.target.value)}}/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="posicion">
                        <Link to='/'>
                            <button 
                            className='boton-generico boton-entrar' 
                            onClick={()=>{enviarDatos();}}>
                            Registrar</button>
                        </Link> 
                        <div className="enlace">
                            <Link to='/'>¿Ya tienes cuenta?</Link>
                            <Link to='/'>Inicia sesión</Link>
                        </div>
                    </div>
                    
                </form>
        </div> 
    )
}
export default Registrar;
