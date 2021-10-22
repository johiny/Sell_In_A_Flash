import React from 'react'

const CampoDescrip = () => {
    return (
        <div>
            <label className="Etiquetas" for="Descripción">
            Descripción
              <textarea className="CamposInput CampoDescrip" name="Descripción" type="text" required/>
          </label>
        </div>
    )
}

export default CampoDescrip
