import React from 'react'

const NavBuscar = ({Etiqueta}) => {
    return (
        <div>
           <button className="BotonBuscar" type="submit">{Etiqueta}</button>
           <input className="CampoBuscar" type="text" name="" id=""/>
        </div>
    )
}

export default NavBuscar
