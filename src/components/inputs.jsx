function Inputs({nombre, icono, tipo}){
    return(
        <div className="caja-input">
            <i className={icono}></i>
            <input type={tipo} placeholder={nombre}/>
        </div>
    );

}

export default Inputs;