// iss_promised.js
const request = require('request-promise-native');


const nextISSTimesForMyLocation = function () {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};


const fetchMyIP = () => {

  return request('https://api.ipify.org?format=json');
};



/* 
 * Makes a request to freegeoip.app using the provided IP address, to get its geographical information (latitude/longitude)
 * Input: JSON string containing the IP address
 * Returns: Promise of request for lat/lon
 */
const fetchCoordsByIP = function (body) {
  const ip = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ip}`);
};


const fetchISSFlyOverTimes = function (body) {
  const parsedBody = JSON.parse(body);
  const latitude = parsedBody["latitude"]
  const longitude = parsedBody["longitude"];

  return request(`https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`)
};
module.exports = { nextISSTimesForMyLocation };