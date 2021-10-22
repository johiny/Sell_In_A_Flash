import imagenn from "media/nn.jpg";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'styles/stylegu.css';
import React, { useEffect, useState } from "react";



const UserdataAD = () =>{
    
    const [idnum, setIdnum] = useState('');
    const [nombre, setNombre] = useState('nn');
    const [apellidos, setApellidos] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [cargo, setCargo] = useState('');
    const [rol, setRol] = useState('');
    const [estado, setEstado] = useState('');


    const enviarAlBackendgu = () => {console.log('Id: ',idnum, ' nombre: ', nombre, ' apellidos: ', apellidos, ' correo: ', correo, ' telefono: ', telefono, ' cargo: ', cargo, ' rol: ', rol, ' estado: ', estado );
    toast.success(`datos de usuario con ID: ${idnum} actualizados`);}
    
    const listaUsuarios = [
        {

        }
    ];
    
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
            <div 
            className="tabladedatos">
                <form 
                className = "tabus1" 
                cellpadding="50" 
                cellspacing="20">
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
                                Juan Esteban 
                            </td>
                            <td >
                                Orozco Botero
                            </td>
                            <td >
                                jeorozcob@gmail.com
                            </td>
                            <td >
                                3007041800
                            </td>
                            <td >
                                Secretario
                            </td>
                            <td >
                                Ejecutivo
                            </td>
                            <td >
                                Autorizado
                            </td>
                        </tr>
                        <tr>
                            <td>{idnum}</td>
                            <td><input 
                            onChange={(e) => {setNombre(e.target.value);}} 
                            placeholder='Nombre' 
                            name='nombre' 
                            type='text'/>
                            </td>
                            <td><input 
                            onChange={(e) => {setApellidos(e.target.value);}} 
                            placeholder='Apellidos' 
                            name='apellidos' 
                            type='text'/></td>
                            <td><input 
                            onChange={(e) => {setCorreo(e.target.value);}} 
                            placeholder='Correo' 
                            name='correo' 
                            type='email'/></td>
                            <td><input 
                            onChange={(e) => {setTelefono(e.target.value);}} 
                            placeholder='Telefono' 
                            name='telefono' 
                            type='number'/></td>
                            <td><input 
                            onChange={(e) => {setCargo(e.target.value);}} 
                            placeholder='Cargo' 
                            name='cargo' 
                            type='text'/></td>                            
                            <td><select 
                            value={rol} 
                            onChange={(e) => {setRol(e.target.value);}}                             
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
                            onChange={(e) => {setEstado(e.target.value);}} 
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
                </form>
            </div>
            <div className = "botonActualizar">
                <button 
                onClick={() => {enviarAlBackendgu();
                prompt(`Colocar password actual `)}} 
                className="mainguButton" 
                type="submit" >
                    Actualizar Datos    
                </button>
                <ToastContainer position= 'bottom-center' autoClose = {5000}/>
            </div>
        </>
    )
};

export default UserdataAD;