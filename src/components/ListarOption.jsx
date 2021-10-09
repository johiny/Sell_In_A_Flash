import BotonJ from "components/BotonJ.jsx"
const ListarOption = () =>{
    return(
        <div className="cuerpo_central__opciones-caja1">
            <h3>¿Quieres ver la lista<br></br> completa?</h3>
            <BotonJ className="Button_grande" mensaje="Listar" link ="/Maestro-Ventas/Table"></BotonJ>
        </div>
    )
}

export default ListarOption;