const resetTimerText = document.getElementById("resettimer");


setInterval(() => {
	let now = new Date();
	console.log(now.toUTCString());
	let deltaHours = 23 - now.getUTCHours();
	let deltaMins = 60 - now.getUTCMinutes();
	let deltaSec = 60 - now.getUTCSeconds();
	console.log(deltaHours, deltaMins, deltaSec);
	resetTimerText.textContent = `Daily reset in: ${deltaHours} hour(s), ${deltaMins} minute(s), ${deltaSec} second(s)!`
}, 1000)