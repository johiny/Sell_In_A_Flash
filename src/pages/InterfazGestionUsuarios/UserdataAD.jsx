import imagenn from "media/nn.jpg";
import Inputsgu from "components/inputsgu";
import 'styles/stylegu.css';
import React, { useEffect, useState } from "react";



const UserdataAD = () =>{
    
    
    return(
        <>
            <form className = "buscarID">

                <Inputsgu nombre='ID Usuario' icono='' tipo='text'/>
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
                        <th > Roll </th>
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
                            <td><Inputsgu nombre='ID Usuario' icono='' tipo='text' /></td>
                            <td><Inputsgu nombre='Nombre' icono='' tipo='text'/></td>
                            <td><Inputsgu nombre='Apellidos' icono='' tipo='text'/></td>
                            <td><Inputsgu nombre='Correo' icono='' tipo='email'/></td>
                            <td><Inputsgu nombre='Telefono' icono='' tipo='number'/></td>
                            <td><Inputsgu nombre='Cargo' icono='' tipo='text'/></td>
                            <td><select type="text" name="rol" placeholder="Rol del sistema">
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