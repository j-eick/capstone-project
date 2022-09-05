import Link from 'next/link';
import styled from 'styled-components';

import MySVG from '../../../public/MySVG';

// *********************  STYLING  *******************

const StyledNav = styled.nav`
	display: flex;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 7%;
	background-color: #e5f0fa;
	box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.4);
`;
const StyledUl = styled.ul`
	display: flex;
	position: relative;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
	padding: 0;
`;
const StyledLi = styled.li`
	list-style: none;
`;

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
								<MySVG variant="home" size="25px" color="black" />
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
