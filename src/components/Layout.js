import styled from 'styled-components';

import Header from './Header.jsx';
import Nav from './Nav';

// const Wrapper = styled.div`
// 	width: 100vw;
// 	background-color: red;
// 	/* @media (min-width: 400px) {
// 		display: grid;
// 		justify-items: center;
// 		width: 375px;
// 		border: 1px solid black;
// 	} */
// `;

const StyledMain = styled.main`
	min-height: calc(100vh - 110px);
	background-color: white;

	/* display: grid;
	grid-template-columns: 1fr;
	align-items: center; */
`;

export default function Layout({children}) {
	return (
		<>
			<Header />
			<StyledMain>{children}</StyledMain>
			<Nav />
		</>
	);
}
