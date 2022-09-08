import Link from 'next/link';
import styled from 'styled-components';

import MySVG from '../../../public/MySVG';

// *********************  STYLING  *******************

const StyledNav = styled.nav`
	display: flex;
	position: fixed;
	bottom: 0;
	align-items: center;
	width: 100%;
	height: 8%;
	background-color: #a0c0d6;
`;
const StyledUl = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
	padding: 0;
`;
const StyledLi = styled.li`
	list-style: none;
`;
// const StyledP = styled.p`
// 	margin: 0;
// 	padding: 0;
// `;

/*******************************************************
 * *********************  COMPONENT  *******************
 */
export default function Nav() {
	return (
		<>
			<StyledNav>
				<StyledUl>
					{/* ******************  HOME  ************** */}
					<StyledLi>
						<Link href="/" aria-label="Home">
							<a>
								<MySVG variant="home" size="25px" color="#545454" />
							</a>
						</Link>
					</StyledLi>
					{/* ******************  PROTOCOL  ************** */}
					<StyledLi>
						<Link href="/run-protocol" aria-label="Run-Protocol">
							<a>
								<MySVG variant="list" size="25px" color="black" />
							</a>
						</Link>
					</StyledLi>
				</StyledUl>
			</StyledNav>
		</>
	);
}
