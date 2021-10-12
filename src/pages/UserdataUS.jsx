import imagenn from "../media/nn.jpg";

function UserdataUS(){
    return(
        <>
            <div>
                <fieldset id="usuario">
                    <legend>ID de usuario</legend>
                        <div id="foto1">
                                <img  src={imagenn} height="400px"/>
                        </div>
                        <div id="informacion1">
                            <table cellpadding="50" cellspacing="20">
                                <tr>
                                    <td>ID</td> <td>1152418441</td>
                                </tr>
                                <tr>
                                    <td>Nombres</td><td>Juan John</td>
                                </tr>
                                <tr>
                                    <td>Apellidos</td><td>Pérez Jímenes</td>
                                </tr>
                                <tr>
                                    <td>Correo</td><td>jjpjim@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Teléfono</td><td>305565163</td>
                                </tr>
                                <tr>
                                    <td>Cargo</td><td>Vendedor</td>
                                </tr>
                                <tr>
                                    <td>Roll</td><td>Ejecutivo</td>
                                </tr>
                                <tr>
                                    <td>Contraseña</td><td>*********</td>
                                </tr>



                            </table>
                        </div>
                </fieldset>
            </div>
            <div>
                <a href="./gestionDeUsuarios3.html">
                    <button class="mainguButton" type="button" >
                        Actualizar datos
                    </button>
                </a>
            </div>

        </>
    )
};

export default UserdataUS;