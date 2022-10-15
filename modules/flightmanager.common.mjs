import log from "@ajar/marker";
import Flight from "../modules/flight.common.mjs";

//--------------------------------------------------
// internal functions
//--------------------------------------------------

// flights counter
let counter = 0;

// unique destinations
let uniqueDest = [];
function uniqueDestination(location) {
	if(!uniqueDest.includes(location)){
		uniqueDest.push(location);
	};
}

// emitter function
function flightInformation(payload){
	log.cyan('Arrived:', payload)
}

//--------------------------------------------------
// exports
//--------------------------------------------------

// 01. liftOff - creates a Flight instance
export function liftOff(number, origin, destination) {

	const myFlight = new Flight(number, origin, destination); // create a new flight
	myFlight.on("Arrived:", flightInformation); // listen to flight emitter (located in flight.mjs module)

	counter += 1; // increse counter
	uniqueDestination(destination); // add unique destinations to list

	myFlight.depart(); // call depart method
	
}

// 02. counterUpdate - keep count of all flights
export function flightsTotal() {
	log.yellow(`====================================`);
	log.yellow(`${counter}`, 'flights were created');
	log.green('destinations',`${uniqueDest}`);
	log.yellow(`====================================`);

}