import {useRouter} from 'next/router';
import styled from 'styled-components';

export const StyledHeader = styled.div`
	display: grid;
	top: 0;
	width: 100%;
	min-height: 60px;
	place-items: center;
	background-color: #a0c0d6;
	box-shadow: 0 -1px 2px #df7356;
`;
export const StyledH1 = styled.h1`
	font-family: var(--font_roboto);
	font-size: var(--font_size_header);
	font-weight: var(--font_weight_header);
`;

console.clear();

export default function Header() {
	const {asPath} = useRouter();

	return (
		<>
			<StyledHeader>
				{asPath === '/' ? <StyledH1>Dashboard</StyledH1> : null}
				{asPath === '/create-workout' ? <StyledH1>Create Workout</StyledH1> : null}
				{asPath === '/run-protocol' ? <StyledH1>Overview</StyledH1> : null}
			</StyledHeader>
		</>
	);
}
