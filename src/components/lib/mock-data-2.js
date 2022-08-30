import dayjs from 'dayjs';
import objectSupport from 'dayjs/plugin/objectSupport';
dayjs.extend(objectSupport);

console.clear();

/*******************************
 ********* MOCK DATA ***********
 */
export const runMockData = [
	{
		id: 1,
		day: '12/08',
		distance: 3.4,
		time: '15:23',
		pace: '05:34',
		borg: 7,
		pain: 1,
	},
	{
		id: 2,
		day: '13/08',
		distance: 5.04,
		time: '25:09',
		pace: '05:14',
		borg: 7,
		pain: 0,
	},
	{
		id: 3,
		day: '14/08',
		distance: 7.91,
		time: '38:15',
		pace: '06:15',
		borg: 8,
		pain: 2,
	},
	{
		id: 4,
		day: '15/08',
		distance: 19.21,
		time: '01:25:02',
		pace: '05:15',
		borg: 7,
		pain: 3,
	},
	{
		id: 5,
		day: '16/08',
		distance: 13.59,
		time: '01:15:22',
		pace: '06:57',
		borg: 8,
		pain: 2,
	},
];
/***********************************
 *********** DATASETS **************
 */
export const data = {
	labels: runMockData.map(run => run.day),
	datasets: [
		{
			type: 'line',
			label: 'Distance',
			data: runMockData.map(run => run.distance),
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
			data: runMockData.map(run => stringToSec(run.time)),
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
			data: runMockData.map(run => stringToSec(run.pace)),
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
			data: runMockData.map(run => run.pain),
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
			data: runMockData.map(run => run.borg),
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
		/******** CHART TABLE ********/
		// title: {
		// 	display: true,
		// 	text: 'Run - Overview',
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
			/******** TIME LABEL xAxis ********/
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
			/******** TIME LABEL yAxis ********/
			// title: {
			//     display: true,
			//     align: 'end',
			//     text: 'time',
			// },
			ticks: {
				callback: function (value) {
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
