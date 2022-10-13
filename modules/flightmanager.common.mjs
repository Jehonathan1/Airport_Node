import log from '@ajar/marker'; 
import Flight from '../modules/flight.common.mjs'

// ---------------------------------------------
// 01. Create and export FlightManager function
// ---------------------------------------------

export default function() {

	// 01. calling tht imported flight class
	const myFlight = new Flight
	
	return "i am the flight manager";
}
