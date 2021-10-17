import {Link} from "react-router-dom"
const Boton = (props) => {
    return(
        <Link to={props.link}>
        <button className={props.className} >{props.mensaje} {props.Snombre}</button>
        </Link>   
    )
} 

export default Boton;