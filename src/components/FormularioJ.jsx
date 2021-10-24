import { useState, useEffect } from "react"
import Select from "react-select"
import { nanoid } from "nanoid"
const FormularioJ = (props) => {

    
    const [producto,setProducto] = useState(null)
    const [cantidad,setCantidad] = useState(null)

    useEffect(() =>{
        setProducto(null)
    },[props.clear])
    
    const producthandler = (value) => {
        const productoescogido = value.value
        setProducto(productoescogido)
    }
    const encargadohandler = (value) => {
        const encargadoactual = value.value
        props.setEncargado(encargadoactual)
    }

    const changehandler = () => {
        props.setShowmodal(true)
        props.setSaveChanges(true)
    }

    const stateoptions = [{ value: 'En Proceso', label: 'En Proceso' },
    { value: 'Cancelada', label: 'Cancelada' },
    { value: 'Entregada', label: 'Entregada' }] 

    return(
        <>
        <form ref={props.form} onSubmit={props.submitto} id={props.id}className={props.estilo}>
            <label htmlFor={props.campo1}>{props.campo1}</label><input name="fecha_venta" type="date" min="2000-01-01" max="2021-12-31" required onChange={changehandler}></input>
            <div className="formulario_nuevaventa_productosfields">
            <div className="formulario_nuevaventa_productos">
            <label htmlFor={props.campo2}>{props.campo2}</label>
                <Select defaultValue={producto} form={props.form}  required onChange={producthandler} options={props.productos}/>
            </div>
            <div className="formulario_nuevaventa_cantidad">    
            <label htmlFor="canitdad">Cantidad</label>
                <input type="number" min="1" max="500" required value={cantidad} onChange={(e) => setCantidad(e.target.value)} onInput={changehandler}></input>
            </div>
            <button className="formulario_nuevaventa_productos_boton" type="button" onClick={() => {props.setProductosAgregados([...props.productosAgregados,{producto,cantidad}])}}>+</button>
            </div>
            <div className="formulario_nuevaventa_clientes">
                <div className="formulario_nuevaventa_cliente">
            <label htmlFor={props.campo3}>{props.campo3}</label><input name="nombre_cliente" type="text" required onInput={changehandler}></input>
            </div>
            <div>
            <label htmlFor="documento_cliente">Documento Cliente</label><input name="documento_cliente" type="text" minLength="8" maxLength="10" required onInput={changehandler}></input>
            </div>
            </div>
            <label htmlFor={props.campo4}>{props.campo4}</label><Select onChange={encargadohandler} options={props.vendedores}/><br></br>
            <label htmlFor={props.campo5}>{props.campo5}</label><input type="number"  required onInput={changehandler} onChange={(e) => {props.setPrecioTotal(Number(e.target.value))}}></input><br></br>
            <label>Seleccione un estado para la venta</label>
            <Select form={props.form} required onChange={changehandler} name="estado" id="tabla__estado_selector" className="campo" options={stateoptions}/>
            </form>
            <div className="products_BOX">
            <h1 className="minicards_titulo">Productos Agregados</h1>
            <div className="minicards_container">
            {props.productosAgregados.map((producto) => {
                return(
                <Minicard key={nanoid()} producto={producto}/>
                )
            })}
            </div>
            </div>
            </>               
    )
}

export default FormularioJ;


const Minicard = (props) => {

    return(
        <div className="minicard">
            <h3>{props.producto.producto.nombre}</h3>
            <h3>${props.producto.producto.precio}</h3>
            <h3>uds.{props.producto.cantidad}</h3>
        </div>
    )
}