import {liftOff, flightsTotal} from "./modules/flightmanager.common.mjs";
import all_data from "./data/flights.json" assert { type: "json" };

// parse json data
const flightsData = all_data["flights"];

// loop over json file and extract data
flightsData.forEach((element) => {

	// destructure the following data:
	const { number, origin, destination } = element;

	// create a Flight instance using a FlightManager method
	liftOff(number, origin, destination);
    
});

// log total flights data
flightsTotal();
