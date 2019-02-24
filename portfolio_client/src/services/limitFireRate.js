function limitFireRate(cb, delay) {
	// create a context variable to determine whether cb can fire
	let canFire = true;

	// create a variable to hold the timeout ID
	let timeoutID;

	// return funtion that will always have these vars
	// in-scope.  This function will only fire cb after speci
	// fied delay.  Also return timer ID so it can be cleared
	// on component unmount.
	return {
		callback: function(e) {
			
			if(canFire) {
				canFire = false;
				cb(e);
				timeoutID = setTimeout(() => canFire = true, delay);
			}

			else {
				return;
			}
		}, 

		timer: timeoutID
	}
}

export default limitFireRate;
