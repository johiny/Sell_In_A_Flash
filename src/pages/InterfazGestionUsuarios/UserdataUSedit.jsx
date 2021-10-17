import Inputs from "components/inputs";
import imagenn from "media/nn.jpg";
import 'styles/stylegu.css';
import React, { useEffect, useState} from "react";


function UserdataUSedit(){
    const [idnum, setIdnum] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');

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

    return(
        <>        
            <fieldset class="fieldsetgu" height="230px">
                <legend>
                    Foto
                </legend>
                <img src={imagenn} height="500px"/>
            </fieldset>
            <table class="tabus1" cellspacing="20">
                <tr>
                    <th > Id. (Cédula) </th> 
                    <th > Nombres </th>
                    <th > Apellidos </th>
                    <th > Correo </th>
                    <th > Teléfono </th>
                    <th > Cargo </th>
                    <th > Roll </th>
                    

                </tr>
                <tbody>
                    <tr>
                        <td >1152443922</td>
                        <td >Juan Esteban </td>
                        <td >Orozco Botero</td>
                        <td >jeorozcob@gmail.com</td>
                        <td >3007041800</td>
                        <td >Password</td>
                        <td >Confirmar Password</td>
                        
                    </tr>
                    <tr>
                        <td><input onChange={(e) => {setIdnum(e.target.value);}} nombre='ID Usuario' icono='' type='text'/></td>
                        <td><input onChange={(e) => {setNombre(e.target.value);}} placeholder='Nombre' icono='' type='text'/></td>
                        <td><input onChange={(e) => {setApellidos(e.target.value);}} placeholder='Apellidos' icono='' type='text'/></td>
                        <td><input onChange={(e) => {setCorreo(e.target.value);}} placeholder='Correo' icono='' type='email'/></td>
                        <td><input onChange={(e) => {setTelefono(e.target.value);}} placeholder='Telefono' icono='' type='number'/></td>
                        <td><inputs onChange={(e) => {setNewPw1(e.target.value);}} placeholder='Contraseña nueva' icono='' tipo='password'/></td>
                        <td><inputs onChange={(e) => {setNewPw2(e.target.value);}} placeholder='Verificar contraseña' icono='' type='password'/></td>                                    
                    </tr>
                </tbody>
            </table>
            <div>
                <div><form>
                    <label for="contraseña">

                    </label>
                </form></div>
                <a href="http://google.com"><button class="mainguButton" type="submit">
                    Actualizar Datos
                </button></a>
            </div>
    

        </>
    )
};

export default UserdataUSedit;