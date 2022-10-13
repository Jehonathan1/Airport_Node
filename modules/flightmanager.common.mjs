import log from '@ajar/marker'; 
import Flight from '../modules/flight.common.mjs';

/*
Create and export the FlightManager function
*/

export default function() {

	// 01. calling tht imported flight class
	const myFlight = new Flight(123, 'arg', 'isr', '08:22', 'no', 'i am a new flight!');
	// myFlight.number = 156;
	// myFlight.origin = 'dfv';
	// myFlight.destination = 'cns';

	log.cyan(myFlight.arrive());
	log.cyan(myFlight.number);
	log.cyan(myFlight.destination);
	
	return "i am the flight manager";
};
