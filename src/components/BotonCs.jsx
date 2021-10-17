import React from 'react'
import {useAuth0} from "@auth0/auth0-react";

const BotonCs = () => {

    const {logout} = useAuth0()

    return (
        <div>
            <button onClick={() => logout()} className='boton-generico'>Cerrar Sesion</button>
        </div>
    )
}

export default BotonCs
