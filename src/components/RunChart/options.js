import dayjs from 'dayjs';
import objectSupport from 'dayjs/plugin/objectSupport';
dayjs.extend(objectSupport);

//################## CHART SETTINGS #################
// Seconds --> String
function secToStringDayJS(sec) {
	return dayjs({seconds: sec}).format('HH:mm:ss');
}

const options = {
	maintainAspectRatio: true,
	stacked: true,
	plugins: {
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
		},
		y1: {
			type: 'linear',
			display: true,
			position: 'right',
			min: '00:00',
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

export default options;
