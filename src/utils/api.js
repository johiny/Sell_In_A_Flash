import axios from "axios";

const baseURL = 'http://localhost:5000'

// CRUD ventas
export const obtenerVentas = async (successCallback,errorCallback) => {

 const options = {method: 'GET', url: `${baseURL}/Ventas/`};

await axios.request(options).then(successCallback).catch(errorCallback);
};

export const enviarVenta = async (data,successCallback,errorCallback) => {
    const options = {method: 'POST',url: `${baseURL}/Ventas/`,data};

    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarVenta = async (data,id,successCallback,errorCallback) => {
    const options = {method: 'PATCH' ,url: `${baseURL}/Ventas/${id}/`, data};

    await axios.request(options).then(successCallback).catch(errorCallback);
}

export const borrarVenta = async (data,id,successCallback,errorCallback) => {
    const options = {method: 'DELETE' ,url: `${baseURL}/Ventas/${id}/`};

    await axios.request(options).then(successCallback).catch(errorCallback);
}