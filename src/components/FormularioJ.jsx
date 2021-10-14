
const FormularioJ = (props) => {

    return(
        <form className={props.estilo}>
            <label for={props.campo1}>{props.campo1}</label><input name={props.campo1} type="date" onChange={() => { props.setSaveChanges(true)
                        props.setShowmodal(true)}}></input>
            <label for={props.campo2}>{props.campo2}</label><input name={props.campo2} type="number" onInput={() => { props.setSaveChanges(true)
                        props.setShowmodal(true)}}></input>
            <label for={props.campo3}>{props.campo3}</label><input name={props.campo3} type="number" onInput={() => { props.setSaveChanges(true)
                        props.setShowmodal(true)}}></input>
            <label for={props.campo4}>{props.campo4}</label><input name={props.campo4} type="text" onInput={() => { props.setSaveChanges(true)
                        props.setShowmodal(true)}}></input>
            <label for={props.campo5}>{props.campo5}</label><input name={props.campo5} type="number" onInput={() => { props.setSaveChanges(true)
                        props.setShowmodal(true)}}></input>
            <select onChange={() => { props.setSaveChanges(true)
                        props.setShowmodal(true)}} name="estado" id="tabla__estado_selector" className="campo">
                        <option defaultvalue ="Selecciona un estado" selected disabled hidden>Selecciona un estado</option>
                        <option value="Proceso">En Proceso</option>
                        <option value="Cancelada">Cancelada</option>
                        <option value="Entregada">Entregada</option>
                    </select>
        </form>
    )
}

export default FormularioJ;