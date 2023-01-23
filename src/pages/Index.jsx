import index_animation from '../media/animation_index.gif'

function Index(){
    return(
        <div className="indexContainer">
            <div className='indexContainer__title'>
                <h1>Bienvenido a Sell-In-A-Flash</h1>
                <h1>Tu administrador de ventas favorito!</h1>
            </div>
           <img src={index_animation} alt='animacion de personas hablando sobre finanzas'/>
           <h1>Empieza a gestionar tu negocio hoy mismo</h1>
        </div>
    );
}

export default Index;