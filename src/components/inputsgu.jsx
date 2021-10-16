const Inputsgu = ({nombre, icono, tipo}) => {

  //  onChange={(e) =>{console.log(`${nombre}: ${e.target.value}`)}}

    return (
        <div className="">
            <i className={icono}></i>
            <input type={tipo} required placeholder={nombre}/>
        </div>
    );
 
}

export default Inputsgu;