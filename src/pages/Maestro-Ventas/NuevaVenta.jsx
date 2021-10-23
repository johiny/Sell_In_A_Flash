import FormularioJ from "components/FormularioJ"
import { useEffect, useState, useRef } from "react";
import ModalNuevaVenta from "components/ModalNuevaVenta"
import database from "Ventas_test.json"
import databaseVendedores from "Vendedores_test.json"
import ProductosBD from "Productos_test.json" 

const NuevaVenta = () => {    
    const [showmodal, setShowmodal] = useState(false);
    const [savechanges,setSaveChanges] = useState(false);
    const [ventas,setVentas] = useState(database)
    const [productosAgregados,setProductosAgregados] = useState([])

    // carga los vendedores
    const [vendedores,setVendedores] = useState("")
    useEffect(() => {
        const vendedores = databaseVendedores.map((element) => {
            return ({value : element.id, label:`${element.nombre} / ${element.id}`})
            });
            setVendedores(vendedores)
    },[])

    // carga los productos
    const [productos, setProductos] = useState(null)
    useEffect (() => {
        const productos = ProductosBD.map((element) => {
            return ({value : element, label:`${element.nombre} - $${element.precio}`})
            });
            setProductos(productos)
        },[])

    const form = useRef(null);
    const submitto = (e) => {
        e.preventDefault();
        const ventanueva = {};
        const formdata = new FormData(form.current);
        formdata.forEach((value,key) => {
            ventanueva[key] = value;
        })
        ventanueva["productos"] = productosAgregados;
        setSaveChanges(false)
        //enviar al backend
        console.log(ventanueva)
        
    }
    // borrar esto es solo para ver si se estan guardando la venta
    useEffect(() => {
        console.log(ventas)
    },[ventas]);

    useEffect(() => {
        console.log(productosAgregados)
    },[productosAgregados]) 

    return(
        <>
        <h1 className="cuerpo_central__Ventas-tabla-titulo">Nueva Venta</h1>
        <div className="tabla__nuevaventa">
        <h1 className="TituloNuevaVenta">Ingrese los datos de la venta</h1>
        <FormularioJ productosAgregados={productosAgregados} setProductosAgregados={setProductosAgregados} productos={productos} vendedores={vendedores}  id="form-venta" form={form} submitto={submitto} estilo="FormularioNuevaVenta" campo1="Fecha Venta" campo2="Seleccione un producto" 
        campo3="Nombre Cliente" campo4="Nombre Encargado" campo5="Valor Total" 
        campo6="Estado"  setShowmodal={setShowmodal} setSaveChanges={setSaveChanges}/>
        </div>
        {showmodal && 
        <ModalNuevaVenta
        savechanges={savechanges} setSaveChanges={setSaveChanges} setShowmodal={setShowmodal} form={form}/>
        }
        </>
    )
}

export default NuevaVenta;