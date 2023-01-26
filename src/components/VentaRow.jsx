import {Link} from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
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
import Select from "react-select"
import { editarVenta, borrarVenta } from "utils/api";

const VentaRow = (props) => {

    const [listacompletaproductos,setListaCompletaProductos] = useState(null); // productos totales de la empresa
    const [modalProductos,setModalProductos] = useState(false);
    const [modalConfirm,setModalConfirm] = useState(false)
    const interruptorModal = () => {
        setModalProductos(!modalProductos)
    }
    const interruptorModalConfirm = () => {
        setModalConfirm(!modalConfirm)
    }
    // carga los vendedores
    const [vendedores,setVendedores] = useState(null)
    useEffect(() => {
        const vendedores = Vendedores.map((element) => {
            return ({value : element, label:`${element.nombre} / ${element.id}`})
            });
            setVendedores(vendedores)
    },[]); 
    const encargadohandler = (value) => {
        const encargadoactual = value.value
        setEditVenta({...editVenta, encargado : encargadoactual})
    }

    const modal = (message,type) => {type(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })};
    const [editVenta,setEditVenta] = useState({
        fecha_venta: props.venta.fecha_venta,
        nombre_cliente : props.venta.nombre_cliente,
        documento_cliente: props.venta.documento_cliente,
        encargado : props.venta.encargado,
        precio_total : props.venta.precio_total,
        estado : props.venta.estado,
        productos : props.venta.productos
    })
    const [editActivate,setEditActivate] = useState(false);

    const editSubmit = async () => {
        await editarVenta(editVenta,props.venta._id,
            (response) =>{
            setEditActivate(false)
            modal('✔️Venta Guardada!',toast.success);
            props.setEjecutarConsulta(true);
        },(error) => {
            modal('❌ La Venta NO se guardo correctamente',toast.error);
            props.setEjecutarConsulta(true);
        }) 
    };
    
    const deleteSubmit = async () => { 
        await borrarVenta(props.venta._id,
            (response) => {
                interruptorModalConfirm();
                modal('✔️Venta Borrada con exito!',toast.success);
                props.setEjecutarConsulta(true);
            },
            (error) => {
                modal('❌ La Venta NO se pudo borrar',toast.error);
            })
    }
    


    return(
<tr>
    <td><Link to={`/Maestro-Ventas/${props.venta._id}`}>{props.venta._id.slice(18)}</Link></td>

    {editActivate ? <td className="campo"><input name="fecha" value={editVenta.fecha_venta} onChange={e=>setEditVenta({...editVenta,fecha_venta : e.target.value})}></input></td> : 
    <td className="campo">{editVenta.fecha_venta}</td>}

    {editActivate ? <td><input name="nombre_cliente" value={editVenta.nombre_cliente} onChange={e=>setEditVenta({...editVenta,nombre_cliente : e.target.value})}></input>
    <input name="documento_cliente" value={editVenta.documento_cliente} onChange={e=>setEditVenta({...editVenta,documento_cliente : e.target.value})}></input></td> :
    <td className="campo">{`${editVenta.nombre_cliente}/${editVenta.documento_cliente}`}</td>}

    {editActivate ? <td className="tabla__select_vendedores"><Select options={vendedores} onChange={encargadohandler} />
        </td> :
    <td className="campo">{`${editVenta.encargado.nombre}/${editVenta.encargado.id}`}</td>}

    {editActivate ? <td className="campo"><input name="valor_total" value={editVenta.precio_total} onChange={e=>setEditVenta({...editVenta,precio_total : e.target.value})}></input></td> :
    <td className="campo">{editVenta.precio_total}</td>}

    {editActivate ? <td><select value={editVenta.estado} name="estado" className="tabla_selector" onChange={e=>setEditVenta({...editVenta, estado: e.target.value})}>
                        <option value="En Proceso">En Proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        <option value="Entregada">Entregada</option>
    </select></td> :
    <td>{editVenta.estado}</td>}


    {/* posiblidad de editar productos y su cantidad?? */}
    <td onClick={interruptorModal}>Ver Productos</td>
    <ModalProductos productos={editVenta.productos} modalProductos={modalProductos} interruptorModal={interruptorModal}/>



    {editActivate ? <td><div className="guardar_cambios"><img src={save} onClick={editSubmit}></img><img onClick={() => setEditActivate(!editActivate)} src={cross}></img></div></td>:
    <td><div className="guardar_cambios"><img onClick={() => setEditActivate(!editActivate)}  src={pencil}></img><img onClick={interruptorModalConfirm} src={trashcan}></img></div></td>}
    <ModalConfirm modalConfirm={modalConfirm} interruptorModalConfirm={interruptorModalConfirm} id={props.venta._id} deleteSubmit={deleteSubmit}/>
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

const ModalConfirm = (props) => {
    const confirmStyles = makeStyles({
        modal:{
            position: "absolute",
            width: "400px",
            height: "200px",
            backgroundColor: "white",
            border: "1px solid rgba(97, 97, 97, 0.1)",
            left: "42%",
            top: "30%",
            border: "none",
            outline: "none",
            borderRadius: "20px"
        }
    });

    const modalstyles = confirmStyles();
    const body =(
    <div className={modalstyles.modal}>
        <div className="tabla__confirm_modal">
            <h2 className="tabla__confirm_modal-titulo">¿Quieres borrar la venta?</h2>
            <h4 className="tabla__confirm_modal-id">ID:{props.id.slice(18)}</h4>
            <div className="tabla__confirm_modal-botones">
            <button onClick={props.deleteSubmit}>Confirmar</button><button onClick={props.interruptorModalConfirm}>Cancelar</button>
            </div>
        </div>
    </div>
    )

    return (
        <Modal open ={props.modalConfirm} onClose={props.interruptorModalConfirm}>
            {body}      
        </Modal>
    )
}
export default VentaRow;