import axios from "axios";

const baseURL = 'http://localhost:5000'

export const obtenerVentas = async (successCallback,errorCallback) => {

 const options = {method: 'GET', url: `${baseURL}/Ventas/`};

await axios.request(options).then(successCallback).catch(errorCallback);
};

export const enviarVenta = async (data,successCallback,errorCallback) => {
    const options = {method: 'POST',url: `${baseURL}/Ventas/Newventa`,data};

    await axios.request(options).then(successCallback).catch(errorCallback);
}