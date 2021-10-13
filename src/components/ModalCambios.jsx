import React from 'react';
import { useState } from "react"
import checkmark from "media/check-mark.svg"

const ModalCambios = (props) => {
const [savechanges , setSaveChanges] = useState(true);

return (
<>
 {savechanges ? (<GuardarCambios/>) : (<CambiosGuardados/>)}
 </>
)
}


const GuardarCambios = () => {
    
     return (
        <div class="Guardar-Popup" id="guardar-popup">
        <h2 class="Guardar-Popup__titulo">
        Has hecho cambios<br></br>¿Quieres guardarlos?
        </h2>
        <button class="Guardar-Popup__button">
            Guardar
        </button>
    </div>
    )
}


const CambiosGuardados = ()=> {    
        
    return(
            <div class="Guardar-Popup" id="guardar-popup">
        <h2 class="Guardar-Popup__titulo">
        ¡Cambios Guardados<br></br>Correctamente!
        </h2>
        <img src={checkmark}></img>
        </div>
        )
}

export default ModalCambios;
