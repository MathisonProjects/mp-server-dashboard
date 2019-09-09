import io from 'socket.io-client';
import {store} from "../../stores";

export default {
	setUp() {
		store.dispatch('nodeStore/resetConnectionStatus');

		this.socket = io.connect('dashboard.mathisonprojects.com', {
		    'reconnection'         : true,
		    'reconnectionDelay'    : 1000,
		    'reconnectionDelayMax' : 5000,
		    'reconnectionAttempts' : 3
		});
		

		// Create all of the listeners and route them
		this.socket.on('init response', (payload) => {
			store.dispatch('nodeStore/setConnection', true);
		});

		this.socket.on('ModeResponse', (payload) => {
			if (payload.result.value == 'on') {
				store.dispatch('cloudflareStore/setDevMode', true);
			} else {
				store.dispatch('cloudflareStore/setDevMode', false);
			}
		});
	},
	sendUp(endpoint, args = null) {
		// Makes it possible to communicate with node live
		if (args == null) {
			this.socket.emit(endpoint);
		} else {
			this.socket.emit(endpoint, args);
		}
	}
}