// import {useState} from 'react';
import styled from 'styled-components';

import useStore from '../../hooks/useStore';

/**
 * ************ STYLES ******************
 */
const StyledTRBody = styled.tr`
	background-color: #ddebf8;
`;
const StyledTD = styled.td`
	padding: 5px 0;
	text-align: center;
`;

console.clear();
/**
 * ************ COMPONENT ******************
 */
export default function CollapsibleRow() {
	// const [optionalRow, setOptionalRow] = useState(true);
	const runData = useStore(state => state.runData);

	return (
		<>
			<StyledTRBody
			// onClick={() => {
			// 	setOptionalRow(!optionalRow);
			// }}
			>
				<StyledTD>{runData}</StyledTD>
				<StyledTD>{runData.time}</StyledTD>
				<StyledTD>{runData.pace}</StyledTD>
				<StyledTD>{runData.borg}</StyledTD>
				<StyledTD>{runData.pain}</StyledTD>
			</StyledTRBody>
			{/* {!optionalRow && (
				<StyledTRBody>
					<StyledTD>
						<button>Edit</button>
						<button>Delete</button>
					</StyledTD>
				</StyledTRBody>
			)} */}
		</>
	);
}
