import {
	Chart as ChartJS,
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

import {options} from './mock-data-2';
import {data} from './mock-data-2';

ChartJS.register(
	CategoryScale,
	BarElement,
	TimeScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const StyledChartDiv = styled.div`
	height: auto;
	margin: 50px 0 0 0;
	padding: 5px;

	/* width: 90vw; */

	/* border: 1px solid black; */

	/* border-radius: 10px; */
	box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;
`;

export default function LineChart() {
	return (
		<StyledChartDiv>
			<Line data={data} options={options} />
		</StyledChartDiv>
	);
}
