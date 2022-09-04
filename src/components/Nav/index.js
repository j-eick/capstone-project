import Link from 'next/link';
import styled from 'styled-components';

import MySVG from '../../../public/MySVG';
import useStore from '../../hooks/useStore';
import AddRunButton from '../Buttons/Button';

console.clear();

// *********************  STYLING  *******************

const StyledNav = styled.nav`
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 7%;
	background-color: #e5f0fa;
`;
const StyledUl = styled.ul`
	display: flex;
	justify-content: space-around;
	padding: 0;
`;
const StyledLi = styled.li`
	list-style: none;
`;

/*******************************************************
 * *********************  COMPONENT  *******************
 */
export default function Nav() {
	const formShows = useStore(state => state.formShows);

	function addRun() {
		console.log(formShows);
		console.log('Test');
		// formShows = true
		// if formShows = true
		// 		turn Button "+" into "↩︎"
		// form shows up with form inside
	}

	return (
		<>
			<StyledNav>
				<StyledUl>
					{/* ******************  HOME  ************** */}
					<StyledLi>
						<Link href="/" aria-label="Home">
							<a>
								<MySVG variant="home" size="30px" color="black" />
							</a>
						</Link>
					</StyledLi>
					{/* ******************  ADD RUN  ************** */}
					<StyledLi>
						<AddRunButton type="button" onClick={addRun} aria-label="add-runData">
							<a>
								<MySVG variant="plus" size="30px" color="black" />
							</a>
						</AddRunButton>
					</StyledLi>
					{/* ******************  PROTOCOL  ************** */}
					<StyledLi>
						<Link href="/run-protocol" aria-label="Run-Protocol">
							<a>
								<MySVG variant="list" size="30px" color="black" />
							</a>
						</Link>
					</StyledLi>
				</StyledUl>
			</StyledNav>
		</>
	);
}
