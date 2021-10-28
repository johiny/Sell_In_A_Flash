import React from 'react'

const ListaDesplegable = ({Etiqueta}) => {
    return (
        <div>
            <label className="Etiquetas" for="Status">
            {Etiqueta}
              <select className="CamposInput" name="estado" id="estado" required>
                <option value="" selected></option>
                <option value="">Disponible</option>
                <option value="">No disponible</option>
              </select>
          </label>
        </div>
    )
}

export default ListaDesplegable
