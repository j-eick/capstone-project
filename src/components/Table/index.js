import styled from 'styled-components';

import useStore from '../../hooks/useStore';
import CollapsibleRow from '../CollapsibleRow';

console.clear();

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
const StyledTH = styled.th`
	padding: 5px 0;
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
						<CollapsibleRow key={data.id} />
					))}
				</tbody>
			</StyledTableContainer>
		</>
	);
}
