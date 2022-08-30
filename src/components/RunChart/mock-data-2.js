import dayjs from 'dayjs';
import objectSupport from 'dayjs/plugin/objectSupport';
dayjs.extend(objectSupport);

/*******************************
 ********* MOCK DATA ***********
 */
export const runData = [
	{
		day: '12/08',
		parameters: {
			distance: 3.4,
			time: '15:23',
			pace: '05:34',
			borg: 7,
			pain: 1,
		},
	},
	{
		day: '13/08',
		parameters: {
			distance: 5.04,
			time: '25:09',
			pace: '05:14',
			borg: 7,
			pain: 0,
		},
	},
	{
		day: '14/08',
		parameters: {
			distance: 7.91,
			time: '38:15',
			pace: '06:15',
			borg: 8,
			pain: 2,
		},
	},
	{
		day: '15/08',
		parameters: {
			distance: 19.21,
			time: '01:25:02',
			pace: '05:15',
			borg: 7,
			pain: 3,
		},
	},
	{
		day: '16/08',
		parameters: {
			distance: 13.59,
			time: '01:15:22',
			pace: '06:57',
			borg: 8,
			pain: 2,
		},
	},
];
/***********************************
 *********** DATASETS **************
 */
export const data = {
	labels: runData.map(run => run.day),
	datasets: [
		{
			type: 'line',
			label: 'Distance',
			data: runData.map(run => run.parameters.distance),
			backgroundColor: 'black',
			borderColor: 'black',
			borderWidth: 1.5,
			pointRadius: 2,
			tension: 0.2,
			yAxisID: 'y',
		},
		{
			type: 'line',
			label: 'Time',
			data: runData.map(run => stringToSec(run.parameters.time)),
			backgroundColor: 'blue',
			borderColor: 'blue',
			borderWidth: 1.2,
			pointRadius: 1.5,
			tension: 0.15,
			yAxisID: 'y1',
		},
		{
			type: 'line',
			label: 'Pace',
			data: runData.map(run => stringToSec(run.parameters.pace)),
			backgroundColor: 'yellow',
			borderColor: 'yellow',
			borderWidth: 1.2,
			pointRadius: 1,
			tension: 0.4,
			yAxisID: 'y1',
		},
		{
			type: 'line',
			label: 'Pain',
			data: runData.map(run => run.parameters.pain),
			backgroundColor: 'red',
			borderColor: 'red',
			borderWidth: 1,
			pointRadius: 2.3,
			tension: 0.4,
			yAxisID: 'y',
		},
		{
			type: 'bar',
			label: 'Borg',
			data: runData.map(run => run.parameters.borg),
			backgroundColor: 'lightblue',
			tension: 0.4,
			yAxisID: 'y',
		},
	],
};
/************************************
 ********** CHART SETTINGS **********
 */
export const options = {
	maintainAspectRatio: true,
	stacked: true,
	plugins: {
		// title: {
		// display: true,
		// text: "Run - Overview"
		// },
		tooltip: {
			enabled: true,
		},
		legend: {
			labels: {
				boxWidth: 7,
				boxHeight: 7,
				usePointStyle: true,
				pointStyle: 'rectRounded',
				font: {
					size: 10,
				},
			},
		},
	},
	scales: {
		x: {
			ticks: {
				font: {
					size: 10,
				},
			},
		},
		y: {
			type: 'linear',
			display: true,
			position: 'left',
			ticks: {
				font: {
					size: 10,
				},
			},
			/******** TIME LABEL ********/
			//   title: {
			//     display: true,
			//     align: 'end',
			//     text: 'km',
			// },
		},
		y1: {
			type: 'linear',
			display: true,
			position: 'right',
			min: '00:00',
			/******** TIME LABEL ********/
			// title: {
			//     display: true,
			//     align: 'end',
			//     text: 'time',
			// },
			ticks: {
				callback: function (value, index, ticks) {
					console.log(value, index, ticks);
					return secToStringDayJS(value);
				},
				font: {
					size: 10,
				},
			},
			grid: {
				drawOnChartArea: false,
			},
		},
	},
};

function stringToSec(time) {
	const numOnly = time.split(':');
	if (numOnly.length === 2) {
		numOnly.unshift('0');
	}
	const [hours, minutes, seconds] = numOnly;
	const result = +hours * 60 * 60 + +minutes * 60 + +seconds;
	return result;
}

function secToStringDayJS(sec) {
	return dayjs({seconds: sec}).format('HH:mm:ss');
}
