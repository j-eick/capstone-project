// import {useState} from 'react';
import {nanoid} from 'nanoid';
import {useState} from 'react';
import Styled from 'styled-components';

import mockData from '../lib/mock-data.json';
import RunDataForm from '../RunDataForm';

/**
 * ##################### STYLING #####################
 */

const StyledTableContainer = Styled.table`
	width: 90vw;
	margin: 50px auto;
	border: 2px solid black;
 `;

const StyledTRHead = Styled.tr`
	background-color: #cce1f5;
`;
const StyledTRBody = Styled.tr`
	background-color: #ddebf8;
`;
const StyledColumnTitle = Styled.th`
	padding: 5px 0;
`;
const StyledEntries = Styled.td`
	padding: 5px 0;
	text-align: center;
`;

/**
 * ##################### COMPONENT #####################
 */

export default function DataTable() {
	const [runData, setRunData] = useState(mockData);

	function addRunningData(event) {
		setRunData([...runData, {id: nanoid(), ...event}]);
	}

	return (
		<>
			<StyledTableContainer>
				<thead>
					<StyledTRHead>
						<StyledColumnTitle>Distance</StyledColumnTitle>
						<StyledColumnTitle>Time</StyledColumnTitle>
						<StyledColumnTitle>Pace</StyledColumnTitle>
						<StyledColumnTitle>Borg</StyledColumnTitle>
						<StyledColumnTitle>Pain</StyledColumnTitle>
					</StyledTRHead>
				</thead>
				<tbody>
					{runData.map(data => (
						<StyledTRBody key={data.id}>
							<StyledEntries>{data.distance}</StyledEntries>
							<StyledEntries>{data.time}</StyledEntries>
							<StyledEntries>{data.pace}</StyledEntries>
							<StyledEntries>{data.borg}</StyledEntries>
							<StyledEntries>{data.pain}</StyledEntries>
						</StyledTRBody>
					))}
				</tbody>
			</StyledTableContainer>
			<RunDataForm onAddRunData={addRunningData} />
		</>
	);
}
