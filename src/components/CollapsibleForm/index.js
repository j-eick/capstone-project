import {useState} from 'react';
import styled from 'styled-components';

const StyledRunbutton = styled.button`
	display: flex;
	margin: 0 auto;
	padding: 10px 15px;
	border: none;
	border-radius: 0 0 20px 20px;
	background-color: #e5f0fa;
`;

export default function CollapsibleForm() {
	const [formShows, setFormShows] = useState(false);

	return (
		<>
			<StyledRunbutton
				type="button"
				onClick={() => {
					setFormShows(!formShows);
				}}
				aria-label="add-runData"
			>
				{!formShows ? 'Add Run' : ''}
			</StyledRunbutton>
		</>
	);
}
