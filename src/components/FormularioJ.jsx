import { useState } from "react"

const FormularioJ = (props) => {

    return(
        <form ref={props.form} onSubmit={props.submitto} id={props.id}className={props.estilo}>
            <label htmlFor={props.campo1}>{props.campo1}</label><input name={props.campo1} type="date" min="2000-01-01" max="2021-12-31" required onChange={(e) => { props.setShowmodal(true)}}></input>
            <label htmlFor={props.campo2}>{props.campo2}</label><input name={props.campo2} type="number" min="1" max="500" required onInput={() => { props.setShowmodal(true)}}></input>
            <label htmlFor={props.campo3}>{props.campo3}</label><input name={props.campo3} type="text" minLength="8" maxLength="10" required onInput={() => { props.setShowmodal(true)}}></input>
            <label htmlFor={props.campo4}>{props.campo4}</label><input name={props.campo4} type="text" required onInput={() => { props.setShowmodal(true)}}></input>
            <label htmlFor={props.campo5}>{props.campo5}</label><input name={props.campo5} type="number" required onInput={() => { props.setShowmodal(true)}}></input>
            <select required onChange={(e) => {props.setShowmodal(true)}} name="estado" id="tabla__estado_selector" className="campo">
                        <option  value="">Selecciona un estado</option>
                        <option value="Proceso">En Proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        <option value="Entregada">Entregada</option>
                    </select>
        </form>
    )
}

export default FormularioJ;