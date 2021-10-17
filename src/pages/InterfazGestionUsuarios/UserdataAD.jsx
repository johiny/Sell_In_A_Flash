import imagenn from "media/nn.jpg";
import Inputsgu from "components/inputsgu";
import 'styles/stylegu.css';
import React, { useEffect, useState } from "react";



const UserdataAD = () =>{
    
    const [idnum, setIdnum] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [cargo, setCargo] = useState('');
    const [rol, setRol] = useState('');
    
    return(
        <>
            <form className = "buscarID">

            <input onChange={(e) => {setIdnum(e.target.value);}} nombre='ID Usuario' icono='' type='text'/>
            <button className ="mainguButton" type="button">
                    Buscar ID
            </button>      
            </form>

                
            
            <fieldset className="fieldsetgu" height="230px">
                <legend>
                    Foto
                </legend>
                <img src={imagenn} height="500px"/>
            </fieldset>
            <div className="tabladedatos">
                <table className = "tabus1" cellpadding="50" cellspacing="20">
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
                            <td >1152443922</td>
                            <td >Juan Esteban </td>
                            <td >Orozco Botero</td>
                            <td >jeorozcob@gmail.com</td>
                            <td >3007041800</td>
                            <td >Secretario</td>
                            <td >Usuario</td>
                            <td >Autorizado</td>
                        </tr>
                        <tr>
                            <td>{idnum}</td>
                            <td><input onChange={(e) => {setNombre(e.target.value);}} placeholder='Nombre' icono='' type='text'/></td>
                            <td><input onChange={(e) => {setApellidos(e.target.value);}} placeholder='Apellidos' icono='' type='text'/></td>
                            <td><input onChange={(e) => {setCorreo(e.target.value);}} placeholder='Correo' icono='' type='email'/></td>
                            <td><input onChange={(e) => {setTelefono(e.target.value);}} placeholder='Telefono' icono='' type='number'/></td>
                            <td><input onChange={(e) => {setCargo(e.target.value);}} placeholder='Cargo' icono='' type='text'/></td>
                            
                            <td><select onChange={(e) => {setRol(e.target.value);}} type="text" name="rol" placeholder="Rol del sistema">
                                <option value="vendedor">Vendedor</option> 
                                <option value="administrador">Administrador</option>
                                <option value="ejecutivo">Ejecutivo</option> 
                                <option value="operario">Operario</option>
                                <option value="director">Director</option> 
                                <option value="gerente comercial">Gerente comercial</option>
                            </select></td>
                            <td><select type="text" name="estado" placeholder="Estado...">
                                <option value="pendiente">Pendiente</option> 
                                <option value="autorizado">Autorizado</option>
                                <option value="no_autorizado">No autorizado</option> 
                            </select></td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div className = "botonActualizar">
                <a href="http://google.com"><button className="mainguButton" type="submit">
                    Actualizar Datos
                </button></a>
            </div>
        </>
    )
};

export default UserdataAD;