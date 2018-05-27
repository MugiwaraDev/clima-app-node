const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyDq48AcQ9hZq-wBOQMD5PbHsAuzmPvEAyA`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad: ${ direccion }`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    // console.log(`Dirección: ${ location.formatted_address }`);
    // console.log(`Lat: ${ coors.lat } `);
    // console.log(`Lng: ${ coors.lng }`);
    // console.log(JSON.stringify(resp.data, undefined, 2));
    // console.log(JSON.stringify(resp.data, undefined, 2));
    // console.log(resp.status);

    return {
        dirección: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}