
const CampoAEditar = ({IDProducto}) => {
    return (
        <div>
            <li>
        <label for="ID">
          <input className="Datos" name="ID" placeholder={IDProducto}/>
        </label>
            </li>
        </div>
    )
}

export default CampoAEditar