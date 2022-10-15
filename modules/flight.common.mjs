import log from "@ajar/marker";
import {EventEmitter} from 'events';
import dayjs from 'dayjs' 

/*
Create and export the Flight Class
*/  

export default class Flight extends EventEmitter {
	constructor(number, origin, destination, departed=false, arrived=false) {
        super()
        // --------------------------------
		// --== Class properties ==--
        // --------------------------------
		this._number = number;
		this._origin = origin;
		this._destination = destination;
		this._departed = departed;
		this._arrived = arrived;

        const randome_delay = Math.round(( 2 + ( Math.random() * 3 )) * 1000 );
        setTimeout(this.#arrive, randome_delay);

	}
	// --------------------------------
	// --== Class Methods ==--
	// --------------------------------
	// getters & Setters
	// 01. number* getter & setter
	get number() {
		return this._number;
	}
	set number(value) {
		if (typeof value !== "number") throw new Error("Only numbers are allowed!");
		if (value < 0 || value > 999)
			throw new Error("numbers should be between 1-999!");
		this._number = value;
	}

	// 02. origin* getter & setter
	get origin() {
		return this._origin;
	}
	set origin(value) {
		if (typeof value !== "string") throw new Error("Only strings are allowed!");
		if (value.length != 3) throw new Error("origin should be a 3-letter-word!");
		this._origin = value.toUpperCase();
	}

	// 03. destination* getter & setter
	get destination() {
		return this._destination;
	}
	set destination(value) {
		if (typeof value !== "string") throw new Error("Only strings are allowed!");
		if (value.length != 3) throw new Error("origin should be a 3-letter-word!");
		this._destination = value.toUpperCase();
	}

    //-------------------------------------------------------------------------------------
    
	// private method
	#arrive = () => {
        // log.magenta('#arrive was called')
		this.arrived = dayjs().format('MMM.D.YYYY, HH:MM:ss');
        const{ number, origin, destination, arrived } = this;
        this.emit(`Arrived:`, `${number} from: ${origin} to ${destination} on ${arrived}`)
	}
	// public method
	depart () {
        this.departed = dayjs().format('MMM.D.YYYY, HH:MM:ss');;
        log.yellow('departed:', this.departed);
    }
};
