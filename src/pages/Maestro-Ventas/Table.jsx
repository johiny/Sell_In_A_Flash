import Buscador from "components/Buscador";
import Tabla from "components/Tabla";
import { useEffect,useState } from "react";
import ModalCambios from "components/ModalCambios";
import ventas from "Ventas_test.json"
import { obtenerVentas } from "utils/api";
import { ToastContainer } from "react-toastify";
import axios from "axios";
const TableIndex = () => {

const [listaVentas, setListaVentas] = useState([]);
const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
// traer ventas desde la base de datos a traves del backend
const fetchVentas = async () => {
    await obtenerVentas(
        (response) => {
            console.log("ventas obtenidas exitosamente")
            setListaVentas(response.data)
            console.log(response.data)
            setEjecutarConsulta(false)
        },
        (error) => {
            console.error("error terrible:",error)
        }
    )
}
useEffect(() => {
        if(ejecutarConsulta){
        fetchVentas();
        setEjecutarConsulta(false);
        }
},[ejecutarConsulta])

    const [listaFiltrada,setListaFiltrada] = useState(listaVentas);
    const [busqueda,setBusqueda] = useState("");

    useEffect(() => {
        setListaFiltrada(
        listaVentas.filter(elemento => {
            return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
                })
        )
    },[busqueda,listaVentas])

    
    return(
        <>
        <h1 className="cuerpo_central__Ventas-tabla-titulo">Ventas</h1>
        <Buscador busqueda={busqueda} setBusqueda={setBusqueda} estilo="Buscador_Tabla_Ventas"/>
        <Tabla ventasbackend={listaFiltrada} setEjecutarConsulta={setEjecutarConsulta}/>
        <ToastContainer position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover/>
        </>
    )
}

export default TableIndex;
