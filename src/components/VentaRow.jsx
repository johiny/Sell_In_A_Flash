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
import ProductosBD from "Productos_test.json"
import Vendedores from "Vendedores_test.json"
import {Modal} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import { Minicard } from "./FormularioJ";
import { nanoid } from "nanoid";

const VentaRow = (props) => {

    const [listaproductos,setListaProductos] = useState(null); // productos en cada venta
    const [listacompletaproductos,setListaCompletaProductos] = useState(null); // productos totales de la empresa
    const [modalProductos,setModalProductos] = useState(false);
    const interruptorModal = () => {
        setModalProductos(!modalProductos)
    }
    // carga todos los productos

    //carga los productos de cada venta

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
        fecha: props.venta.fecha_venta,
        cantidad: props.venta.cantidad,
        cliente : `${props.venta.nombre_cliente}/${props.venta.documento_cliente}`,
        encargado : `${props.venta.encargado.nombre}/${props.venta.encargado.id}`,
        precio_total : props.venta.precio_total,
        estado : props.venta.estado,
        productos : props.venta.productos
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
    <td className="campo">{props.venta.fecha_venta}</td>}

    {editActivate ? <td className="campo"><input name="cliente" value={editVenta.cliente} onChange={e=>setEditVenta({...editVenta,cliente : e.target.value})}></input></td> :
    <td className="campo">{`${props.venta.nombre_cliente}/${props.venta.documento_cliente}`}</td>}

    {editActivate ? <td className="campo"><input name="encargado" value={editVenta.encargado} onChange={e=>setEditVenta({...editVenta,encargado : e.target.value})}></input></td> :
    <td className="campo">{`${props.venta.encargado.nombre}/${props.venta.encargado.id}`}</td>}

    {editActivate ? <td className="campo"><input name="valor_total" value={editVenta.precio_total} onChange={e=>setEditVenta({...editVenta,valor_total : e.target.value})}></input></td> :
    <td className="campo">{props.venta.precio_total}</td>}

    {editActivate ? <td><select value={editVenta.estado} name="estado" id="tabla__estado_selector" className="campo" onChange={e=>setEditVenta({...editVenta, estado: e.target.value})}>
                        <option value="Proceso">En Proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        <option value="Entregada">Entregada</option>
    </select></td> :
    <td>{props.venta.estado}</td>}


    {/* posiblidad de editar productos y su cantidad?? */}
    <td onClick={interruptorModal}>Ver Productos</td>
    <ModalProductos productos={props.venta.productos} modalProductos={modalProductos} interruptorModal={interruptorModal}/>



    {editActivate ? <td><div className="guardar_cambios"><img src={save} onClick={editSubmit}></img><img onClick={() => setEditActivate(!editActivate)} src={cross}></img></div></td>:
    <td><div className="guardar_cambios"><img onClick={() => setEditActivate(!editActivate)}  src={pencil}></img><img src={trashcan}></img></div></td>}
   </tr>
    )
};

const ModalProductos = (props) => {

    const listStyles = makeStyles({
        modal:{
            position: "absolute",
            width: "1000px",
            height: "700px",
            backgroundColor: "white",
            border: "1px solid rgba(97, 97, 97, 0.1)",
            left: "28%",
            top: "10%",
            border: "none",
            outline: "none",
            borderRadius: "20px"
        }
    });

    const modalstyles = listStyles();
    const body =(
    <div className={modalstyles.modal}>
        <div align="center">
            <h2>Productos de esta venta</h2>
            <div className="minicards_container">
            {props.productos.map((producto) => {
                return(
                <Minicard key={nanoid()} producto={producto}/>
                )
            })}
            </div>
        </div>
    </div>
    )
    return(
        <Modal open ={props.modalProductos} onClose={props.interruptorModal}>
            {body}      
        </Modal>
    )
}
export default VentaRow;