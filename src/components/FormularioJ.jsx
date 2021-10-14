
const FormularioJ = (props) => {

    return(
        <form className={props.estilo}>
            <h1>ID</h1>
            <label>{props.campo1}</label><input type="date" onChange={() => { props.setSaveChanges(true)
                        props.setShowmodal(true)}}></input>
            <laber>{props.campo2}</laber><input type="number" onInput={() => { props.setSaveChanges(true)
                        props.setShowmodal(true)}}></input>
            <laber>{props.campo3}</laber><input type="number" onInput={() => { props.setSaveChanges(true)
                        props.setShowmodal(true)}}></input>
            <laber>{props.campo4}</laber><input type="text" onInput={() => { props.setSaveChanges(true)
                        props.setShowmodal(true)}}></input>
            <laber>{props.campo5}</laber><input type="number" onInput={() => { props.setSaveChanges(true)
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