const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=3366fdd6427edded7331390cf353f62e`);

    // console.log(resp.data.main.temp);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}