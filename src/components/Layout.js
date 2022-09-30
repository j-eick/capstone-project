import styled from 'styled-components';

import Nav from './Nav';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default function Layout({children}) {
	return (
		<>
			<StyledMain>{children}</StyledMain>
			<Nav />
		</>
	);
}
