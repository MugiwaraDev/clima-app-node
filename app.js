// const axios = require('axios');
const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El Clima en ${ coors.dirección } es de ${ temp }`;
    } catch {
        return `No se pudo determinar el clima en ${ direccion }`;
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);

//     })
//     .catch(e => console.log(e));

// clima.getClima(19.4326077, -99.133208)
//     .then(temp => {
//         console.log(temp);
//     })
//     .catch(e => console.log(e));