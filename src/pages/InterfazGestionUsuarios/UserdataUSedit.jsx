import Inputs from "components/inputs";
import imagenn from "media/nn.jpg";
import 'styles/stylegu.css';
import React, { useEffect, useState} from "react";
import { ToastContainer, toast } from "react-toastify";

function UserdataUSedit(){
    const [idnum, setIdnum] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [actDatos, setActDatos] = useState(false);
    const [cargo, setCargo] = useState('');
    const [rol, setRol] = useState('');

    const [newPw1, setNewPw1] = useState('');
    const [newPw2, setNewPw2] = useState('');
    const [actPw, setActPw] = useState('');
    const [newPwValid, setNewPwValid] = useState(false)
    useEffect(() => {
        if (newPw1 == newPw2 && newPw1.lenght > 7){
            <span>la contraseña es valida</span>
            setNewPwValid(true);
        } else {
            <span>verifique la contraseña, deben ser iguales y tener al menos 8 caracteres</span>
            setNewPwValid(false);
        }
    }, [newPw1,newPw2]);

    const enviarAlBackendgu = () => {console.log('Id: ',idnum, ' nombre: ', nombre, ' apellidos: ', apellidos, ' correo: ', correo, ' telefono: ', telefono);
    toast.success(`datos de usuario actualizados`);}
    
    const listaUsuarios = [
        {

        }
    ];

    return(
        <div className= "maingu">        
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
            <div className="tabladedatos">
                <form className="tabus1">
                        {
                            actDatos ? (
                                <>
                                <tbody>
                        <tr>
                            <th > Id. (Cédula) </th> 
                            <th > Nombres </th>
                            <th > Apellidos </th>
                            <th > Correo </th>
                            <th > Teléfono </th>
                            <th > Cargo </th>
                            <th > Roll </th>
                        </tr>

                        <tr>
                            <td >{idnum}</td>
                            <td >{nombre} </td>
                            <td >{apellidos}</td>
                            <td >{correo}</td>
                            <td >{telefono}</td>
                            <td >Secretario</td>
                            <td >Autorizado</td>
                            
                        </tr>
                        </tbody>
                        </>
                            ) : (
                                <>
                                <tbody>
                        <tr>
                            <th > Id. (Cédula) </th> 
                            <th > Nombres </th>
                            <th > Apellidos </th>
                            <th > Correo </th>
                            <th > Teléfono </th>
                            <th > Contraseña nueva </th>
                            <th > Verificar contraseña </th>
                        </tr>
                        <tr>
                            <td><input disabled onChange={(e) => {setIdnum(e.target.value);}} default={idnum} name='ID Usuario' type='text'/></td>
                            <td><input onChange={(e) => {setNombre(e.target.value);}} default={nombre} placeholder='Nombre' type='text'/></td>
                            <td><input onChange={(e) => {setApellidos(e.target.value);}} default={apellidos} placeholder='Apellidos' type='text'/></td>
                            <td><input onChange={(e) => {setCorreo(e.target.value);}} default={correo} placeholder='Correo' type='email'/></td>
                            <td><input onChange={(e) => {setTelefono(e.target.value);}} default={telefono} placeholder='Telefono' icono='' type='number'/></td>
                            <td><input onChange={(e) => {setNewPw1(e.target.value);}} placeholder='Contraseña nueva'  type='password'/></td>
                            <td><input onChange={(e) => {setNewPw2(e.target.value);}} placeholder='Verificar contraseña' type='password'/></td>                                    
                        </tr>
                            </tbody>
                        <div className="passwordRequerido">
                            <div>
                        <h3>Constraseña actual (requerido): </h3> <input onChange={(e) => {setActPw(e.target.value);}} placeholder='Contraseña Actual' required type='password'/>
                            </div>
                        </div>

                        </>)
                        }                    
                    <div className = "botonActualizar">               
                            <button 
                            onClick={() => {enviarAlBackendgu();
                                setActDatos(!actDatos)}}
                            className="mainguButton" 
                            type="submit" >
                                Actualizar Datos  
                            </button>
                            <ToastContainer position= 'bottom-center' autoClose = {5000}/>                
                    </div>
                </form>
            </div>
            <div>
            </div>
    

        </div>
    )
};

export default UserdataUSedit;