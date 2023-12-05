
const dailyResetTimerText = document.getElementById("dailyResetTimer");
const monthlySkinResetTimerText = document.getElementById("monthlySkinResetTimer");
const seasonResetTimerText = document.getElementById("seasonResetTimer");
const heroNameText = document.getElementById("heroname");
const heroCostText = document.getElementById("summoncost");
const abilityMakariText = document.getElementById("abilityg");
const abilityMukakiText = document.getElementById("abilityd");

function daysInMonth(year, month){
	return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

function display(name) {
    fetch("./cards.json").then((res) => {
        return res.json()
    }).then((data) => {
		console.log(data)
		document.getElementById("container").style.backgroundColor = "#550000";
		heroNameText.textContent = `Name: ${data[name]['name']}`;
		heroCostText.textContent = `Summon cost: ${data[name]['summon_cost']}`;
		abilityMakariText.textContent = `Ability (Makari-Hari side): ${data[name]['ability_g']}`;
		abilityMukakiText.textContent = `Ability (Mukaki side): ${data[name]['ability_d']}`;
	});
}

setInterval(() => {
	let now = new Date();
	const monthDaysSeason_1 = daysInMonth(now.getUTCFullYear(), now.getUTCMonth());
	const monthDaysSeason_2 = daysInMonth(now.getUTCFullYear(), now.getUTCMonth()+1);
	const monthDaysSeasonTotal = ((monthDaysSeason_1 + monthDaysSeason_2) - monthDaysSeason_1) - now.getUTCDate();
	const monthDaysSkin = daysInMonth(now.getUTCFullYear(), now.getUTCMonth());
	const deltaDays = ((monthDaysSkin - 1) - now.getUTCDate());
	const deltaHours = 23 - now.getUTCHours();
	const deltaMins = 59 - now.getUTCMinutes();
	const deltaSec = 59 - now.getUTCSeconds();
	dailyResetTimerText.textContent = `Daily limit reset in ${deltaHours} hour(s), ${deltaMins} minute(s), ${deltaSec} second(s)!`;
	monthlySkinResetTimerText.textContent = `Montly skin reset in ${deltaDays} day(s)!`;
	seasonResetTimerText.textContent = `Season reset in ${monthDaysSeasonTotal} day(s)!`;
}, 1000)