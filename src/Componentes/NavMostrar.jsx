import React from 'react'

const NavMostrar = () => {
    return (
        <div>
            Mostrar
              <select name="num entradas" id="num entradas">
                <option value="15" selected>5</option>
                <option value="10">10</option>
                <option value="15">15</option> 
              </select>
            entradas
        </div>
    )
}

export default NavMostrar
