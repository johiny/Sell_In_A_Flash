import React from 'react'

const Tabla2 = ({Campo1, Campo2, Campo3, Campo4 }) => {
    return (
        <div>
            <table className="contenido">
              <thead className="tabla">
                  <tr>
                    <th></th>
                    <th>{Campo1}</th>
                    <th>{Campo2}</th>
                    <th>{Campo3}</th>
                    <th>{Campo4}</th>
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

export default Tabla2
