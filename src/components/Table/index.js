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

const StyledTRBody = Styled.tr`
background-color: #ddebf8;
`;

const StyledTRHead = Styled.tr`
	padding: 10px 0;
	background-color: #cce1f5;
`;

const StyledEntries = Styled.td`
	text-align: center;
`;

/**
 * ##################### COMPONENT #####################
 */

export default function DataTable() {
	const [runData, setRunData] = useState(mockData);
	console.log(runData);

	function addRunningData(event) {
		console.log(event);
		setRunData([...runData, {id: nanoid(), ...event}]);
	}

	return (
		<>
			<StyledTableContainer>
				<thead>
					<StyledTRHead>
						<th>Distance</th>
						<th>Time</th>
						<th>Pace</th>
						<th>Borg</th>
						<th>Pain</th>
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
			<RunDataForm onAddRunningData={addRunningData} />
		</>
	);
}
