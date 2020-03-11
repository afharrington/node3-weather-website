const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1e8e71a6b94471cd4d824b1e7a1e0b9a/' + latitude + ',' + longitude;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service');
        } else if (body.error) {
            callback('Unable to find weather for these coordinates. Try again.');
        } else {
            return callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees outside, with a ${body.currently.precipProbability}% chance of rain.`);
        }
    });
}


module.exports = forecast;