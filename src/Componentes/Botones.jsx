import React from 'react'
import {Link} from 'react-router-dom';


const Botones = ({Nombre1, Nombre2}) => {
  return (
    <Link to='/RegisterEdit'>
    <div>
      <button className="BotonesRegistro" type="submit">{Nombre1}</button>
      <button className="BotonVer" type="submit">{Nombre2}</button>
    </div>
    </Link>
  )
}

export default Botones
