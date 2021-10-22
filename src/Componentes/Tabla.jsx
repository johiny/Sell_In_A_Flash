import React from 'react'

const Tabla = () => {
    return (
        <div>
            <table className="contenido">
              <thead className="tabla">
                  <tr>
                    <th></th>
                    <th>ID Producto</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Status</th>
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
