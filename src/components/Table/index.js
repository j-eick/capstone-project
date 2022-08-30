import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';

import {runMockData} from '../lib/mock-data-2';
import RunDataForm from '../RunDataForm';

console.clear();
/**
 * ##################### STYLING #####################
 */
const StyledTableContainer = styled.table`
	display: none;
	width: 90vw;
	margin: 50px auto;
	border: 2px solid black;
`;
const StyledTRHead = styled.tr`
	background-color: #cce1f5;
`;
const StyledTRBody = styled.tr`
	background-color: #ddebf8;
`;
const StyledTH = styled.th`
	padding: 5px 0;
`;
const StyledTD = styled.td`
	padding: 5px 0;
	text-align: center;
`;
/**
 * ##################### COMPONENT #####################
 */
export default function DataTable() {
	const [runData, setRunData] = useState(runMockData);

	function addRunData(event) {
		console.log(event.distance);
		console.log(event);
		console.log(runData);
		setRunData([...runData, {id: nanoid(), ...event}]);
	}

	return (
		<>
			<StyledTableContainer>
				<thead>
					<StyledTRHead>
						<StyledTH>Distance</StyledTH>
						<StyledTH>Time</StyledTH>
						<StyledTH>Pace</StyledTH>
						<StyledTH>Borg</StyledTH>
						<StyledTH>Pain</StyledTH>
					</StyledTRHead>
				</thead>
				<tbody>
					{runMockData.map(data => (
						<StyledTRBody key={data.id}>
							<StyledTD>{data.distance}</StyledTD>
							<StyledTD>{data.time}</StyledTD>
							<StyledTD>{data.pace}</StyledTD>
							<StyledTD>{data.borg}</StyledTD>
							<StyledTD>{data.pain}</StyledTD>
						</StyledTRBody>
					))}
				</tbody>
			</StyledTableContainer>
			<RunDataForm onAddRunData={addRunData} />
		</>
	);
}
