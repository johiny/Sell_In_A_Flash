import {Link} from 'react-router-dom'

function Boton(){
    return(
        <div>
            <Link to='/index'>
                <div>
                    <button className="boton-generico boton-entrar">Entrar</button>
                </div>
            </Link> 
        </div>
        
    );
}

export default Boton;