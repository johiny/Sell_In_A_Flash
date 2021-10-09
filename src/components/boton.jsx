import {Link} from 'react-router-dom'

function Boton({Snombre, nombre, clases}){
    return(
        <div>
            <button className={clases}>{nombre} {Snombre}</button>
        </div>
        
    );
}

export default Boton;