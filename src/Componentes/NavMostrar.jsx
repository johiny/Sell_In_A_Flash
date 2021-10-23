import React from 'react'

const NavMostrar = ({Texto1, Texto2}) => {
    return (
        <div className="LeyendaMostrar">
            {Texto1}
              <select name="num entradas" id="num entradas">
                <option value="15" selected>5</option>
                <option value="10">10</option>
                <option value="15">15</option> 
              </select>
            {Texto2}
        </div>
    )
}

export default NavMostrar
