import React from 'react'

const DatosFormulario = ({Etiqueta}) => {
  return (
    <div>
    <li className='Etiquetas'>
        <label for="ID">
          {Etiqueta}
          <input className="CamposInput" name="ID"/>
        </label>
    </li>
    </div>
  )
}

export default DatosFormulario