const rows = document.getElementById("tabla");
const popupspace = document.getElementById("guardar-popup")
let saveButton;
let rowsList = [];

//cargar json
let cargar = (json)=>{
    let lista = 0;
    fetch(json)
    .then(Response => Response.json())
    .then(ventas => {
        for(let venta in ventas){
        insertarFila(rows,ventas[venta])
        }
    });
};

//inserta filas en la table dinamicamente
insertarFila = (rows,venta)=> {rows.insertAdjacentHTML("beforeend",`
<tr>
<td>${venta.ID}</td>
<td contenteditable class="campo">${venta.Fecha}</td>
<td contenteditable class="campo">${venta.Cantidad}</td>
<td contenteditable class="campo">${venta.Cliente}</td>
<td contenteditable class="campo">${venta.Encargado}</td>
<td contenteditable class="campo">${venta.Valor_Total}</td>
<td><select name="estado" id="tabla__estado_selector" class="campo">
    <option selected="selected" value ="${venta.Estado}" selected disabled hidden>${venta.Estado}</option>
    <option value="Proceso">En Proceso</option>
    <option value="Cancelada">Cancelada</option>
    <option value="Entregada">Entregada</option>
</select></td>
</tr>`);};

insertarPopup = () => {popupspace.insertAdjacentHTML("beforeend",`
<div class="Guardar-Popup" id="guardar-popup">
<h2 class="Guardar-Popup__titulo">
    Has hecho cambios<br>
    ¿Quieres guardarlos?
</h2>
<button class="Guardar-Popup__button">
    <a href="javascript:;" id="save-button" onclick="popupsuccess()">Guardar</a>
</button>`
)};

popupsuccess = () => {popupspace.innerHTML =`
<div class="Guardar-Popup" id="guardar-popup">
<h2 class="Guardar-Popup__titulo">
    ¡Cambios Guardados <br> Correctamente!
</h2>`
};

cargar("Ventas_test.json");

// identifica todos los campos
setTimeout(() => {
    ventas = document.querySelectorAll(".campo")
}, 1000);

// añade escuchadores a todos los campos e inserta un popup si se activa uno.
setTimeout(() => {
    ventas.forEach(element => {
        element.addEventListener("input", event => {
        insertarPopup();    
        })
        element.addEventListener('change', event => {
            insertarPopup();
        })
    })
},1200);


    