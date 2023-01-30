import {
	Chart as ChartJS,
	BarController,
	BarElement,
	CategoryScale,
	TimeScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import styled from 'styled-components';

import useStore from '../../hooks/useStore';
import CollapsibleForm from '../CollapsibleForm';

import options from './options.js';

ChartJS.register(
	CategoryScale,
	BarController,
	BarElement,
	TimeScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

// ################# STYLING #################

const StyledChartDiv = styled.div`
	/* height: auto; */
	margin: 0 15px 0 15px;
	border-radius: 15px;
	background-color: #fff;
	box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.15) 0 3px 6px;
`;

// ################# COMPONENT #################

export default function LineChart() {
	const runData = useStore(state => state.runData);

	// String -> Seconds
	function stringToSec(time) {
		const numOnly = time.split(':');
		if (numOnly.length === 2) {
			numOnly.unshift('0');
		}
		const [hours, minutes, seconds] = numOnly;
		const result = +hours * 60 * 60 + +minutes * 60 + +seconds;
		return result;
	}

	const data = {
		labels: runData.map(run => run.day).slice(-7),
		datasets: [
			{
				type: 'line',
				label: 'Distance',
				data: runData.map(run => run.distance).slice(-7),
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
				data: runData.map(run => stringToSec(run.time)).slice(-7),
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
				data: runData.map(run => stringToSec(run.pace)).slice(-7),
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
				data: runData.map(run => run.pain).slice(-7),
				backgroundColor: 'red',
				borderColor: 'red',
				borderWidth: 1,
				pointRadius: 0,
				tension: 0.4,
				yAxisID: 'y',
			},
			{
				type: 'bar',
				label: 'Borg',
				data: runData.map(run => run.borg).slice(-7),
				backgroundColor: 'lightblue',
				tension: 0.4,
				yAxisID: 'y',
			},
		],
	};

	return (
		<div>
			<StyledChartDiv>
				<Line data={data} options={options} />
			</StyledChartDiv>
			<CollapsibleForm />
		</div>
	);
}
