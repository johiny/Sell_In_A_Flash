import BotonJ from "components/BotonJ.jsx"
const CajaOption = (props) =>{
    return(
        <div className={props.estilo}>
            <h3>{props.titulo}<br></br>{props.subtitulo}</h3>
            <BotonJ className="Button_grande" mensaje={props.mensajeboton} link ={props.link}></BotonJ>
        </div>
    )
}

export default CajaOption;