const dailyResetTimerText = document.getElementById("dailyResetTimer");
const monthlySkinResetTimerText = document.getElementById("monthlySkinResetTimer");
const seasonResetTimerText = document.getElementById("seasonResetTimer");

function daysInMonth(year, month){
	return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

setInterval(() => {
	let now = new Date();
	const monthDaysSeason_1 = daysInMonth(now.getUTCFullYear(), now.getUTCMonth());
	const monthDaysSeason_2 = daysInMonth(now.getUTCFullYear(), now.getUTCMonth()+1);
	const monthDaysSeasonTotal = (monthDaysSeason_1 + monthDaysSeason_2) - monthDaysSeason_1 -1;
	const monthDaysSkin = daysInMonth(now.getUTCFullYear(), now.getUTCMonth());
	const deltaDays = ((monthDaysSkin - 1) - now.getUTCDate());
	const deltaHours = 23 - now.getUTCHours();
	const deltaMins = 59 - now.getUTCMinutes();
	const deltaSec = 59 - now.getUTCSeconds();
	dailyResetTimerText.textContent = `Daily reset in: ${deltaHours} hour(s), ${deltaMins} minute(s), ${deltaSec} second(s)!`;
	monthlySkinResetTimerText.textContent = `Montly skin reset in: ${deltaDays} day(s)!`;
	seasonResetTimerText.textContent = `Season reset in: ${monthDaysSeasonTotal} day(s)!`;
}, 1000)