import VentaRow from "components/VentaRow.jsx"
import CheckMark from "media/check-mark.svg"
import { nanoid } from "nanoid"
import { useEffect, useState, useRef } from "react/cjs/react.development"
import trashcan from "media/delete.png"
const Tabla = ({ventasbackend,setSaveChanges,setShowmodal}) => {
    
    const editHandler = (e) => {
        e.preventDefault()
        const ventaeditada = [];
        const fd = new FormData(tabla.current)
        fd.forEach((value,key) => {
            ventaeditada[key] = value    
    })
    //enviar al backend
    }

    useEffect(()=> {
        console.log(ventasbackend)
    },[ventasbackend])

    const tabla = useRef(null)

    return(
        <div className="tabla">
            <form ref={tabla} id="tabla-form" onSubmit={editHandler}>
            <table id="tabla">
                <thead>   
                    <tr>
                        <th id="tabla__id">ID</th>
                        <th id="tabla__date">Fecha</th>
                        <th id="tabla__cantidad">Cantidad</th>
                        <th id="tabla__cliente">Cliente</th>
                        <th id="tabla__encargado">Encargado</th>
                        <th id="tabla__valor-total">Valor Total</th>
                        <th id="tabla__estado">Estado</th>
                        <th id="tabla__delete"></th>
                    </tr>
                </thead>
                <tbody>    
                {ventasbackend.map((venta) => {
                    return (
                    <VentaRow tabla={tabla} key={nanoid()} setSaveChanges={setSaveChanges} setShowmodal={setShowmodal} venta={venta} ico={trashcan}/>
                    )
                })}
                </tbody>
            </table>
            </form>
            </div>
    )    
}    

export default Tabla;