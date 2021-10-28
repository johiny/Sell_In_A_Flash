import React from 'react'

const Tabla = ({Campo1, Campo2, Campo3, Campo4 }) => {
    return (
        <div>
            <table className="contenido">
              <thead>
                    <tr>
                        <td>{Campo1}</td>
                        <td>{Campo2}</td>
                        <td>{Campo3}</td>
                        <td>{Campo4}</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th className="check"><input type="checkbox" name="" id=""/></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th className="check"><input type="checkbox" name="" id=""/></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th className="check"><input type="checkbox" name="" id=""/></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th className="check"><input type="checkbox" name="" id=""/></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tabla
