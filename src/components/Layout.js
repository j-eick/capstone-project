import styled from 'styled-components';

import Nav from './Nav';

const Wrapper = styled.div`
	width: 100vw;
	background-color: red;
	@media (min-width: 400px) {
		display: grid;
		justify-items: center;
		width: 375px;
		border: 1px solid black;
	}
`;

const StyledMain = styled.main`
	display: grid;
	grid-template-columns: 1fr;
	align-items: center;
	height: 90%;
`;

export default function Layout({children}) {
	return (
		<Wrapper>
			<StyledMain>{children}</StyledMain>
			<Nav />
		</Wrapper>
	);
}
