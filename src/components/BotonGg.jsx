import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';


const BotonGg = () => {
    const {loginWithRedirect} = useAuth0();
    return (
        <div>
            <button onClick={() => loginWithRedirect()} className='boton-generico' ><i class="fab fa-google"></i> Continuar con Google</button>
        </div>
    );
}

export default BotonGg ;
