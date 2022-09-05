import Link from 'next/link';
import {useState} from 'react';
import styled from 'styled-components';

import MySVG from '../../../public/MySVG';
import Button from '../Buttons/Button';
import RunForm from '../RunForm';

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
	position: relative;
	justify-content: space-around;
	padding: 0;
`;
const StyledLi = styled.li`
	list-style: none;
`;
const StyledCollapsibleDiv = styled.div`
	position: absolute;
	z-index: 50;
	top: -1000%;
	width: 80vw;
	height: 48.5vh;
	transform: translateX(-43%);
	border-radius: 30px 30px 0 0;
	background-color: green;
`;

/*******************************************************
 * *********************  COMPONENT  *******************
 */
export default function Nav() {
	// const formShows = useStore(state => state.formShows);
	// const toggleFormShows = useStore(state => state.toggleFormShows);
	const [formShows, setFormShows] = useState(false);

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
						{formShows && (
							<StyledCollapsibleDiv>
								<RunForm />
							</StyledCollapsibleDiv>
						)}
						<Button
							type="button"
							onClick={() => {
								setFormShows(!formShows);
							}}
							aria-label="add-runData"
						>
							{!formShows ? (
								<MySVG variant="plus" size="30px" color="black" />
							) : (
								<MySVG variant="undo" size="24px" color="black" />
							)}
						</Button>
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
