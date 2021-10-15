import React from 'react';
import checkmark from "media/check-mark.svg"

const ModalNuevaVenta = ({setSaveChanges, savechanges,ventas,setVentas,fecha,cantidad,cliente,encargado,valortotal,estado}) => {
return (
<>
 {savechanges ? (<NuevaVenta setSaveChanges={setSaveChanges} 
 ventas={ventas} setVentas={setVentas} fecha={fecha} cantidad={cantidad} cliente={cliente} encargado={encargado} valortotal={valortotal} estado={estado}/>) : (<VentaGuardada/>)}
 </>
)
}

const NuevaVenta = ({setSaveChanges,ventas,setVentas,fecha,cantidad,cliente,encargado,valortotal,estado}) => {

    const GuardarBackend = () => {
        setVentas([...ventas,{
            ID:9,
            Fecha:{fecha},
            Cantidad :{cantidad},
            Cliente :{cliente},
            Encargado:{encargado},
            Valor_Total:{valortotal},
            Estado:{estado}   
        }])
        setSaveChanges(false)
        console.log("fecha",fecha,"cantidad",cantidad,"cliente",cliente,"encargado",encargado,"valor total",valortotal,"estado",estado)
    }
    return (
        <div className="Guardar-Popup" id="guardar-popup">
        <h2 className="Guardar-Popup__titulo">
        ¿Ingresando una <br></br>nueva venta?<br></br>¿Quieres guardarla?
        </h2>
        <button type="button" onClick={() => GuardarBackend()} class="Guardar-Popup__button">
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