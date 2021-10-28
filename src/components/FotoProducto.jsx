import React from 'react'

const FotoProducto = ({Imagen}) => {
    return (
        <div>
           <img className="FotoProducto" src={Imagen} alt='Imagen Producto'/>
        </div>
    )
}

export default FotoProducto
