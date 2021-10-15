import { useState } from "react"

const FormularioJ = (props) => {

    return(
        <form className={props.estilo}>
            <label for={props.campo1}>{props.campo1}</label><input value={props.fecha} name={props.campo1} type="date" onChange={(e) => { props.setShowmodal(true)
            props.setFecha(e.target.value)}}></input>
            <label for={props.campo2}>{props.campo2}</label><input value={props.cantidad} name={props.campo2} type="number" onInput={() => { props.setShowmodal(true)}}
            onChange={(e) => {props.setCantidad(e.target.value)}}></input>
            <label for={props.campo3}>{props.campo3}</label><input value={props.cliente} name={props.campo3} type="number" onInput={() => { props.setShowmodal(true)}}
            onChange={(e) => {props.setCliente(e.target.value)}}></input>
            <label for={props.campo4}>{props.campo4}</label><input value={props.encargado} name={props.campo4} type="text" onInput={() => { props.setShowmodal(true)}}
            onChange={(e) => {props.setEncargado(e.target.value)}}></input>
            <label for={props.campo5}>{props.campo5}</label><input value ={props.valortotal} name={props.campo5} type="number" onInput={() => { props.setShowmodal(true)}}
            onChange={(e) => {props.setValorTotal(e.target.value)}}></input>
            <select value={props.estado} onChange={(e) => {props.setShowmodal(true)
            props.setEstado(e.target.value)}}name="estado" id="tabla__estado_selector" 
            className="campo">
                        <option defaultvalue ="Selecciona un estado" selected disabled hidden>Selecciona un estado</option>
                        <option value="Proceso">En Proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        <option value="Entregada">Entregada</option>
                    </select>
        </form>
    )
}

export default FormularioJ;