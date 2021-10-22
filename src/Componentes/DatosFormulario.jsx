import React from 'react'

const DatosFormulario = () => {
  return (
    <div>
    <form>
        <label className="Etiquetas" for="ID">
          {Etiqueta}
          <input className="CamposInput" name="ID"/>
        </label>
    </form>
    <section>
        <img className="FotoProducto" src={SinFoto} alt='Imagen Producto'/>
    </section>
    </div>
  )
}

export default DatosFormulario