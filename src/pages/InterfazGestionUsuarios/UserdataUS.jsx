import imagenn from "media/nn.jpg";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import 'styles/stylegu.css';
import React, { useEffect, useState } from "react";

function UserdataUS(){
    const [idnum, setIdnum] = useState('');
    const [nombre, setNombre] = useState('nn');
    const [apellidos, setApellidos] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [cargo, setCargo] = useState('');
    const [rol, setRol] = useState('');
    return(
        <>
            <div>
            <fieldset className="fieldsetgu">
                    <legend>ID de usuario</legend>
                        <div id="informacion1">
                            <div id="foto1">
                                <img  src={imagenn} height="400px"/>
                            </div>

                            <table cellpadding="50" cellspacing="20">
                                <tr>
                                    <td><h3>ID</h3></td> <td>{idnum}</td>
                                </tr>
                                <tr>
                                    <td><h3>Nombres</h3></td><td>{nombre}</td>
                                </tr>
                                <tr>
                                    <td><h3>Apellidos</h3></td><td>{apellidos}</td>
                                </tr>
                                <tr>
                                    <td><h3>Correo</h3></td><td>{correo}</td>
                                </tr>
                                <tr>
                                    <td><h3>Teléfono</h3></td><td>{telefono}</td>
                                </tr>
                                <tr>
                                    <td><h3>Cargo</h3></td><td>{cargo}</td>
                                </tr>
                                <tr>
                                    <td><h3>Rol</h3></td><td>{rol}</td>
                                </tr>
                               
                            </table>
                        </div>
            </fieldset>
            </div>
            <div className='centrarBoton'>
                <Link to="/InterfazGestionUsuarios/Usuarios/Editar">
                    <button class="mainguButton" type="button" >
                        Actualizar datos
                    </button>
                </Link>
                
            </div>

        </>
    )
};

export default UserdataUS;