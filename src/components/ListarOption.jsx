import Boton from "components/Boton.jsx"
const ListarOption = () =>{
    return(
        <div className="cuerpo_central__opciones-caja1">
            <h3>¿Quieres ver la lista<br></br> completa?</h3>
            <Boton className="Button_grande" mensaje="Listar" link ="/TableIndex"></Boton>
        </div>
    )
}

export default ListarOption;