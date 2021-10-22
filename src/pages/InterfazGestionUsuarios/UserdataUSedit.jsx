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
    const [actDatos, setActDatos] = useState(false)

    const [newPw1, setNewPw1] = useState('');
    const [newPw2, setNewPw2] = useState('');
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
        <>        
            <fieldset class="fieldsetgu" height="230px">
                <legend>
                    Foto
                </legend>
                <img src={imagenn} height="500px"/>
            </fieldset>
            <form className="tabus1" cellspacing="20">
                <tbody>
                    {
                        actDatos ? (
                            <>
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
                    </>
                        ) : (
                            <>
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
                        <td><input disabled onChange={(e) => {setIdnum(e.target.value);}} default={idnum} name='ID Usuario' icono='' type='text'/></td>
                        <td><input onChange={(e) => {setNombre(e.target.value);}} default={nombre} placeholder='Nombre' icono='' type='text'/></td>
                        <td><input onChange={(e) => {setApellidos(e.target.value);}} default={apellidos} placeholder='Apellidos' icono='' type='text'/></td>
                        <td><input onChange={(e) => {setCorreo(e.target.value);}} default={correo} placeholder='Correo' icono='' type='email'/></td>
                        <td><input onChange={(e) => {setTelefono(e.target.value);}} default={telefono} placeholder='Telefono' icono='' type='number'/></td>
                        <td><input onChange={(e) => {setNewPw1(e.target.value);}} placeholder='Contraseña nueva' icono='' type='password'/></td>
                        <td><input onChange={(e) => {setNewPw2(e.target.value);}} placeholder='Verificar contraseña' icono='' type='password'/></td>                                    
                    </tr>
                    </>    )
                    }
                </tbody>
            </form>
            <div>
                <div><form>
                </form></div>
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
            </div>
    

        </>
    )
};

export default UserdataUSedit;