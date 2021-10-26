import React from 'react'
import { Link } from "react-router-dom";
import Inputs from "components/inputs";
import Boton from "components/BotonJ";
import logo from "media/logo.png"
import "styles/estilos.css"

const Registrar = () => {
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
                            <Inputs nombre='nombres' tipo='text'/>
                        </div>
                        <div>
                            <p>Apellidos</p>
                            <Inputs nombre='apellidos' tipo='text'/>
                        </div>
                    </div>
                    <div className="inputsRe">
                        <div>
                            <p className="p">Correo</p>
                            <Inputs nombre='pepito@gmail.com' tipo='email'/>
                        </div>
                        <div>
                            <p>Contraseña</p>
                            <Inputs nombre='contraseña' tipo='password'/>
                        </div>
                    </div>
                    <div className="posicion">
                        <Boton mensaje='registrar' className='boton-generico boton-entrar' link='/index'/>
                        <div className="enlace">
                            <Link>¿Ya tienes cuenta?</Link>
                            <Link to='/'>Inicia sesión</Link>
                        </div>
                    </div>
                    
                </form>
        </div> 
    )
}

export default Registrar
