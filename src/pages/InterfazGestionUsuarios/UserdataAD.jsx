import imagenn from "media/nn.jpg";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'styles/stylegu.css';
import React, { useEffect, useState, useRef } from "react";
import { Auth0Provider } from "@auth0/auth0-react";


const UserdataAD = () =>{
    
    const [idnum, setIdnum] = useState('000000');
    const [nombre, setNombre] = useState('Nombres');
    const [apellidos, setApellidos] = useState('Apellidos');
    const [correo, setCorreo] = useState('correo@mail.com');
    const [telefono, setTelefono] = useState('00000000');
    const [cargo, setCargo] = useState('Cargo');
    const [rol, setRol] = useState('Rol');
    const [estado, setEstado] = useState('Autorizado');
    
    const formAdmingu = useRef(null);



    const submitFormAdmingu = (e) => {
        e.preventDefault();
        const fd = new FormData(formAdmingu.current);
        fd.forEach((value,key) => {
            console.log(key, value)
        });
        console.log("datos del form enviados");
    }


    

    

    return(
        <>
        
            <div className="centrarBoton">
                <form 
                className = "buscarID">               
                    <input 
                    onChange={(e) => {setIdnum(e.target.value);}} 
                    name='ID-Usuario'  
                    type='text'
                    required
                    placeholder='Ingresar ID de usuario'/>
                
                    
                        <button 
                        className ="mainguButton" 
                        type="submit">
                                Buscar ID
                        </button>                
                </form>
            </div>
            <fieldset className="fieldsetgu">

                        <div id="informacion1">
                            <div id="foto1">
                                <img  src={imagenn} height="500px"/>
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
            <div 
            className="tabladedatos">
                <form 
                className = "tabus1" 
                cellpadding="50" 
                cellspacing="20"
                ref={formAdmingu}
                onSubmit={submitFormAdmingu}>
                    <tr>
                        <th > Id. (Cédula) </th>
                        <th > Nombres </th>
                        <th > Apellidos </th>
                        <th > Correo </th>
                        <th > Teléfono </th>
                        <th > Cargo </th>
                        <th > Rol </th>
                        <th > Estado </th>

                    </tr>
                    <tbody>
                      
                        <tr>
                            <td >
                                {idnum}                
                            </td>                            
                            <td >
                                {nombre} 
                            </td>
                            <td >
                                {apellidos}
                            </td>
                            <td >
                                {correo}
                            </td>
                            <td >
                                {telefono}
                            </td>
                            <td >
                                {cargo}
                            </td>
                            <td >
                                {rol}
                            </td>
                            <td >
                                {estado}
                            </td>
                        </tr>
                        <tr>
                            <td>{idnum}</td>
                            <td><input 
                             
                            placeholder='Nombre' 
                            name='nombre' 
                            type='text'/>
                            </td>
                            <td><input 
                            
                            placeholder='Apellidos' 
                            name='apellidos' 
                            type='text'/></td>
                            <td><input 
                             
                            placeholder='Correo' 
                            name='correo' 
                            type='email'/></td>
                            <td><input 
                             
                            placeholder='Telefono' 
                            name='telefono' 
                            type='number'/></td>
                            <td><input 
                            
                            placeholder='Cargo' 
                            name='cargo' 
                            type='text'/></td>                            
                            <td><select 
                            value={rol} 
                                                         
                            type="text"                             
                            name="rol"                             
                            placeholder="Rol del sistema">
                                
                                <option 
                                value="vendedor">
                                    Vendedor
                                </option> 
                                <option 
                                value="administrador">
                                    Administrador
                                </option>
                                <option 
                                value="ejecutivo">
                                    Ejecutivo
                                </option> 
                                <option 
                                value="operario">
                                    Operario
                                </option>
                                <option 
                                value="director">
                                    Director
                                </option> 
                                <option 
                                value="gerente comercial">Gerente comercial</option>
                            </select></td>
                            <td><select 
                            value={estado} 
                             
                            type="text" 
                            name="estado" 
                            placeholder="Estado...">
                                <option 
                                value="pendiente">
                                    Pendiente
                                </option> 
                                <option 
                                value="autorizado">
                                    Autorizado
                                </option>
                                <option 
                                value="no_autorizado">
                                    
                                    No autorizado
                                </option> 
                            </select></td>

                        </tr>
                    </tbody>
                    <div className = "botonActualizar">
                        <button 
//                        onClick={() => {enviarAlBackendgu();}} 
                        className="mainguButton" 
                        type="submit" >
                            Actualizar Datos    
                        </button>
                        <ToastContainer position= 'bottom-center' autoClose = {2000}/>
                    </div>
                </form>
            </div>
        </>
    )
};

export default UserdataAD;