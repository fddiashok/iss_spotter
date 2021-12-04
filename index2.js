const { nextISSTimesForMyLocation } = require('./iss_promised');

// fetchMyIP()
// .then((body)=>{console.log(body);});

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

const printPassTimes = (data) => { console.log(data) };