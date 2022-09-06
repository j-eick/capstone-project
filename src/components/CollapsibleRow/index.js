// import {useState} from 'react';
import styled from 'styled-components';

/**
 * ************ STYLES ******************
 */
const StyledTRBody = styled.tr`
	background-color: #ddebf8;
`;
// const StyledTD = styled.td`
// 	padding: 5px 0;
// 	text-align: center;
// `;

console.clear();
/**
 * ************ COMPONENT ******************
 */
export default function CollapsibleRow() {
	// const [optionalRow, setOptionalRow] = useState(true);

	return (
		<>
			<StyledTRBody
			// onClick={() => {
			// 	setOptionalRow(!optionalRow);
			// }}
			>
				{/* <StyledTD></StyledTD>
				<StyledTD></StyledTD>
				<StyledTD></StyledTD>
				<StyledTD></StyledTD>
				<StyledTD></StyledTD> */}
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
