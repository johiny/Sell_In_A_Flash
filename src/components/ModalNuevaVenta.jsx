import React from 'react';
import checkmark from "media/check-mark.svg"

const ModalNuevaVenta = ({savechanges}) => {
return (
<>
 {savechanges ? (<NuevaVenta/>) : (<VentaGuardada/>)}
 </>
)
}

const NuevaVenta = () => {

    return (
        <div className="Guardar-Popup" id="guardar-popup">
        <h2 className="Guardar-Popup__titulo">
        ¿Ingresando una <br></br>nueva venta?<br></br>¿Quieres guardarla?
        </h2>
        <button type="submit" form="form-venta"  className="Guardar-Popup__button">
            Guardar
        </button>
    </div>
    )
}

const VentaGuardada = () => {

    return (
        <div className="Guardar-Popup" id="guardar-popup">
        <h2 className="Guardar-Popup__titulo">
        ¡Venta Guardada<br></br>Satisfactoriamente!
        </h2>
        <img src={checkmark}></img>
        </div>
    )
}

export default ModalNuevaVenta;