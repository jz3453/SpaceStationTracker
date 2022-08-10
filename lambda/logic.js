const axios = require('axios');
const opencage = require('opencage-api-client');

module.exports = {
    fetchSatelliteData(handlerInput, data) {
        const url = 'https://api.wheretheiss.at/v1/satellites/25544';
        
        var config = {
            timeout: 8000
        };

        async function getJsonResponse(url, config){
            const res = await axios.get(url, config);
            return res.data;
        }

        return getJsonResponse(url, config).then((result) => {
            var latitude = result.latitude;
            var longitude = result.longitude;
            var speed = result.velocity;
            
            if(data === 'location') {
                var coordinate = [latitude, longitude];
                return coordinate;
            } else if(data === 'speed') {
                return speed;
            }
        }).catch((error) => {
            return null;
        });
    },
    reverseGeocode(LAT, LNG) {
        var url = "https://api.opencagedata.com/geocode/v1/json?q="+LAT+"+"+LNG+"&key=1a4f2e81dc204bc5ae0503b8d0934403";
        var config = {
            timeout: 8000
        };
        async function getJsonResponse(url, config){
            const res = await axios.get(url, config);
            return res.data;
        }
        return getJsonResponse(url, config).then((result) => {
            return result.results[0].formatted;
        }).catch((error) => {
            return null;
        });
    }
        
}