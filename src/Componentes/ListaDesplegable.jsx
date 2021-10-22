import React from 'react'

const ListaDesplegable = () => {
    return (
        <div>
            <label className="Etiquetas" for="Status">
            Status
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
