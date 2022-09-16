import styled from 'styled-components';

const StyledTitleDiv = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	justify-content: center;
	width: 100%;
	background-color: #a0c0d6;
	box-shadow: 0 -1px 2px #df7356;
`;

const StyledH1 = styled.h1`
	margin: 13px 0;
	font-family: var(--font_roboto);
	font-size: var(--font_size_header);
	font-weight: var(--font_weight_header);
`;

export default function HomeTitle() {
	return (
		<StyledTitleDiv>
			<StyledH1>Dashboard</StyledH1>
		</StyledTitleDiv>
	);
}
