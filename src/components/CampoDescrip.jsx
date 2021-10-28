import React from 'react'

const CampoDescrip = ({Etiqueta}) => {
    return (
        <div>
            <label className="Etiquetas" for="Descripción">
            {Etiqueta}
              <textarea className="CamposInput CampoDescrip" name="Descripción" type="text" required/>
          </label>
        </div>
    )
}

export default CampoDescrip
