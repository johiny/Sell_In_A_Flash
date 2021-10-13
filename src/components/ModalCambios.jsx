import React from 'react';
import checkmark from "media/check-mark.svg"

const ModalCambios = ({setSaveChanges, savechanges}) => {
return (
<>
 {savechanges ? (<GuardarCambios setSaveChanges={setSaveChanges}/>) : (<CambiosGuardados/>)}
 </>
)
}


const GuardarCambios = ({setSaveChanges}) => {
    
     return (
        <div class="Guardar-Popup" id="guardar-popup">
        <h2 class="Guardar-Popup__titulo">
        Has hecho cambios<br></br>¿Quieres guardarlos?
        </h2>
        <button onClick={ () => setSaveChanges(false)} class="Guardar-Popup__button">
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
