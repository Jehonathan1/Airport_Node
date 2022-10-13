import log from '@ajar/marker'; 
import FlightManager from './modules/flightmanager.common.mjs'
import all_data from './data/flights.json' assert { type:"json" }

// 01. calling tht imported FlightManager function
log.magenta(FlightManager());

// 02. parse json data
const flightsData = all_data['flights']; 
flightsData.forEach(element => {
    // destructure the following:
    const {number, origin, destination } = element;
    log.yellow(`flight number: ${number}, from ${origin} to ${destination}`)
});
