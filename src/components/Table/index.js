import styled from 'styled-components';

import useStore from '../../hooks/useStore';

/**
 * ##################### STYLING #####################
 */
const StyledTableContainer = styled.table`
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
	const runData = useStore(state => state.runData);

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
					{runData.map(data => (
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
		</>
	);
}
