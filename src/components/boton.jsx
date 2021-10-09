import {Link} from "react-router-dom"
const BotonJ = (props) => {
    return(
        <Link to={props.link}>
        <button className={props.className} >{props.mensaje}</button>
        </Link>   
    )
} 

export default BotonJ;