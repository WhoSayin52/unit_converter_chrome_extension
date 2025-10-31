const inputFieldEl = document.querySelector(".input-container .input-field");
const convertButtonEl = document.querySelector(".input-container .input-button");

const outputFields = [
	{
		outputFieldEl: document.getElementById("length-output"),
		metricUnit: "meters",
		imperialUnit: "feet",
		metricToImperialRate: 3.281
	},
	{
		outputFieldEl: document.getElementById("volume-output"),
		metricUnit: "liters",
		imperialUnit: "gallons",
		metricToImperialRate: 0.264

	},
	{
		outputFieldEl: document.getElementById("mass-output"),
		metricUnit: "kilos",
		imperialUnit: "pounds",
		metricToImperialRate: 2.204
	}
];

convertButtonEl.addEventListener("click", function () {
	const amount = Number(inputFieldEl.value.trim());

	if (Number.isNaN(amount)) {
		console.log("Invalid input")
		return;
	}

	for (let i = 0; i < outputFields.length; ++i) {

		const field = outputFields[i];
		console.log(field.outputFieldEl);

		field.outputFieldEl.textContent = convertUnit(
			amount,
			field.metricUnit,
			field.imperialUnit,
			field.metricToImperialRate
		);
	}
});

function convertUnit(amount, metricUnit, imperialUnit, conversionRate) {
	let inImperial = 0;
	let inMetric = 0;

	if (amount != 0) {
		inImperial = (amount * conversionRate).toFixed(3);
		inMetric = (amount / conversionRate).toFixed(3);
	}

	const output = `${amount} ${metricUnit} = ${inImperial} ${imperialUnit} | ${amount} ${imperialUnit} = ${inMetric} ${metricUnit}`;

	console.log(output);

	return output;
}

window.addEventListener("DOMContentLoaded", () => {
	convertButtonEl.click();
});
