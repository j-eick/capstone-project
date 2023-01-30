import styled from 'styled-components';

const StyledHeader = styled.div`
	display: grid;
	top: 0;
	width: 100%;
	min-height: 60px;
	place-items: center;
	background-color: #a0c0d6;
	box-shadow: 0 -1px 2px #df7356;
`;
const StyledH1 = styled.h1`
	font-family: var(--font_roboto);
	font-size: var(--font_size_header);
	font-weight: var(--font_weight_header);
`;

export default function Header() {
	return (
		<StyledHeader>
			<StyledH1>Dashboard</StyledH1>
		</StyledHeader>
	);
}
