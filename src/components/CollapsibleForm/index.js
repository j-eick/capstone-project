import {useState} from 'react';
import styled from 'styled-components';

import MySVG from '../../../public/MySVG';
import RunForm from '../RunForm';

/**
 * ********************* STYLING **************************
 */
const StyledRunbutton = styled.button`
	display: flex;
	position: ${({formShows}) => {
		return formShows ? 'absolute' : '';
	}};
	left: ${({formShows}) => {
		return formShows ? '50%' : '0';
	}};
	margin: auto;
	padding: ${({formShows}) => {
		return formShows ? '6px 10px' : '8px 20px';
	}};
	transform: ${({formShows}) => {
		return formShows ? 'translateX(-50%)' : '0';
	}};
	border: none;
	border-radius: 0 0 20px 20px;
	box-shadow: rgba(0, 0, 0, 0.16) 0 2px 5px, 0 2px 5px 0 #fff inset;
	font-family: var(--font_roboto);
	font-size: var(--font_size_addRun);
`;

const StyledContainerDiv = styled.div`
	width: 60vw;
	margin: 0 auto;
	padding: 5px 0;
`;
/**
 * ********************* COMPONENT **************************
 */
export default function CollapsibleForm() {
	const [formShows, setFormShows] = useState(false);

	return (
		<>
			<StyledRunbutton
				formShows={formShows}
				type="button"
				onClick={() => {
					setFormShows(!formShows);
				}}
				aria-label="add-runData"
			>
				{formShows ? <MySVG variant="undo2" size="24px" color="#545454" /> : 'Add Run'}
			</StyledRunbutton>
			{formShows && (
				<StyledContainerDiv>
					<RunForm />
				</StyledContainerDiv>
			)}
		</>
	);
}
