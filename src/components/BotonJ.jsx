import {Link} from "react-router-dom"
const Boton = (props) => {
    return(
        <Link to={props.link}>
        <button onClick={props.click} className={props.className} >{props.mensaje} {props.Snombre}</button>
        </Link>   
    )
} 

export default Boton;