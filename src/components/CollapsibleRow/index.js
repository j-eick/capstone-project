import {useState} from 'react';
import styled, {css} from 'styled-components';

import useStore from '../../hooks/useStore';

/**
 * ************ STYLES ******************
 */
const StyledTRBody = styled.tr`
	background-color: #ddebf8;
`;
const StyledTD = styled.td`
	padding: 9px 0;
	border-bottom: 1px solid white;
	font-size: var(--font_size_tableCell);
	text-align: center;
`;
const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 28.5px;
	padding: 2px 10px;
	text-align: center;
`;
const StyledButton = styled.button`
	position: absolute;
	${({variant}) =>
		variant === 'delete' &&
		css`
			right: 10%;
		`}
	${({variant}) =>
		variant === 'edit' &&
		css`
			right: 25.5%;
		`}
`;
/**
 * ************ COMPONENT ******************
 */
export default function CollapsibleRow({cellData}) {
	const [optionalRow, setOptionalRow] = useState(true);
	// Implementation follows
	// const [editClicked, setEditClicked] = useState(false);
	const deleteEntry = useStore(state => state.deleteEntry);

	return (
		<>
			<StyledTRBody
				onClick={() => {
					setOptionalRow(!optionalRow);
				}}
			>
				<StyledTD>{cellData.distance}</StyledTD>
				<StyledTD>{cellData.time}</StyledTD>
				<StyledTD>{cellData.pace}</StyledTD>
				<StyledTD>{cellData.borg}</StyledTD>
				<StyledTD>{cellData.pain}</StyledTD>
			</StyledTRBody>
			{!optionalRow && (
				<StyledDiv>
					<StyledButton variant="delete" onClick={() => deleteEntry(cellData.id)}>
						Delete
					</StyledButton>
					{/* Implementation follows */}
					{/* <StyledButton variant="edit" onClick={() => setEditClicked(!editClicked)}>
						Edit
					</StyledButton> */}
				</StyledDiv>
			)}
		</>
	);
}
