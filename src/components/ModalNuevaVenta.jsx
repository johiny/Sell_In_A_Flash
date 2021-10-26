import React from 'react';
import checkmark from "media/check-mark.svg"
import BotonJ from "components/BotonJ"

const ModalNuevaVenta = ({savechanges,setSaveChanges,setShowmodal,form}) => {
return (
<>
 {savechanges ? (<NuevaVenta/>) : (<VentaGuardada setSaveChanges={setSaveChanges} setShowmodal={setShowmodal} form={form}/>)}
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

const VentaGuardada = ({setSaveChanges,setShowmodal,form}) => {

    const limpiarventa = () => {
        form.current.reset();
        setSaveChanges(false)
        setShowmodal(false)
    }
    return (
        <div className="Guardar-Popup" id="guardar-popup">
        <h2 className="Guardar-Popup__titulo">
        ¡Venta Guardada<br></br>Satisfactoriamente!
        </h2>
        <img src={checkmark}></img>
        <BotonJ click={limpiarventa} link="/Maestro-ventas/NuevaVenta" mensaje="Nueva Venta" className="ModalNuevaVenta_button"/>
        </div>
    )
}

export default ModalNuevaVenta;