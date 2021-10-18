import {Link} from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import trashcan from "media/delete.png"
import pencil from "media/pencil.svg"
import cross from "media/cancel.svg"
import save from "media/save.svg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { Component } from 'react';
import Select, {StylesConfig} from 'react-select';
import ProductosBD from "Productos_test.json"

const VentaRow = (props) => {

    const [listaproductos,setListaProductos] = useState(null); // productos en cada venta
    const [listacompletaproductos,setListaCompletaProductos] = useState(null); // productos totales de la empresa

    
    useEffect (() => {
        const productos = ProductosBD.map((element) => {
            return ({value : {id : element.id, nombre : element.nombre, precio : element.precio, cantidad: element.cantidad}, label:`${element.nombre} - $${element.precio} ud.${element.cantidad}`})
            });
            setListaCompletaProductos(productos)
    },[]);
    useEffect(() => {
        const productos = props.venta.Productos.map((element) => {
             return ({value : {id : element.id, nombre : element.nombre, precio : element.precio, cantidad: element.cantidad}, label:`${element.nombre} - $${element.precio} ud.${element.cantidad}`})
             });
             setListaProductos(productos)
    },[]);

    const modal = () => {toast.success('✔️Venta Guardada!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })};
    const [editVenta,setEditVenta] = useState({
        fecha: props.venta.Fecha,
        cantidad: props.venta.Cantidad,
        cliente : props.venta.Cliente,
        encargado : props.venta.Encargado,
        valor_total : props.venta.Valor_Total,
        estado : props.venta.estado,
        productos : props.venta.Productos
    })
    const [editActivate,setEditActivate] = useState(false);

    const editSubmit = () => {
        console.log(editVenta)
        setEditActivate(false)
        modal();
    } 
    


    return(
<tr>
    <td><Link to={`/Maestro-Ventas/${props.venta.ID}`}>1</Link></td>

    {editActivate ? <td className="campo"><input name="fecha" value={editVenta.fecha} onChange={e=>setEditVenta({...editVenta,fecha : e.target.value})}></input></td> : 
    <td className="campo">{props.venta.Fecha}</td>}

    {editActivate ? <td className="campo"><input name="cliente" value={editVenta.cliente} onChange={e=>setEditVenta({...editVenta,cliente : e.target.value})}></input></td> :
    <td className="campo">{props.venta.Cliente}</td>}

    {editActivate ? <td className="campo"><input name="encargado" value={editVenta.encargado} onChange={e=>setEditVenta({...editVenta,encargado : e.target.value})}></input></td> :
    <td className="campo">{props.venta.Encargado}</td>}

    {editActivate ? <td className="campo"><input name="valor_total" value={editVenta.valor_total} onChange={e=>setEditVenta({...editVenta,valor_total : e.target.value})}></input></td> :
    <td className="campo">{props.venta.Valor_Total}</td>}

    {editActivate ? <td><select value={editVenta.estado} name="estado" id="tabla__estado_selector" className="campo" onChange={e=>setEditVenta({...editVenta, estado: e.target.value})}>
                        <option value="Proceso">En Proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        <option value="Entregada">Entregada</option>
    </select></td> :
    <td>{props.venta.Estado}</td>}


    {/* posiblidad de editar productos y su cantidad?? */}
    {editActivate ? <td><Select isMulti options={listacompletaproductos} value={listaproductos} onChange={e => setEditVenta({...editVenta, Productos: e.target.value})}/></td> : 
    <td><Select isClearable={false} isMulti styles="backgroundColor: 'gray'" value={listaproductos}/></td>}



    {editActivate ? <td><div className="guardar_cambios"><img src={save} onClick={editSubmit}></img><img onClick={() => setEditActivate(!editActivate)} src={cross}></img></div></td>:
    <td><div className="guardar_cambios"><img onClick={() => setEditActivate(!editActivate)}  src={pencil}></img><img src={trashcan}></img></div></td>}
   </tr>
    )
}

export default VentaRow;