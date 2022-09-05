import Link from 'next/link';
import {useState} from 'react';
import styled from 'styled-components';

import MySVG from '../../../public/MySVG';
import RunForm from '../RunForm';

console.clear();

// *********************  STYLING  *******************

const StyledNav = styled.nav`
	display: flex;
	position: fixed;
	bottom: 0;
	align-items: center;
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
const StyledCollapsibleDiv = styled.div`
	position: absolute;
	z-index: 50;
	top: -1148%;
	width: 70vw;
	height: 51vh;
	transform: translateX(-43%);
	border-radius: 30px 30px 0 0;
	background-color: #e5f0fa;
`;
const StyledButton = styled.button`
	border: none;
	background: none;
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
								<MySVG variant="home" size="25px" color="black" />
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
						<StyledButton
							type="button"
							onClick={() => {
								setFormShows(!formShows);
							}}
							aria-label="add-runData"
						>
							{!formShows ? (
								<MySVG variant="plusSquare" size="25px" color="black" />
							) : (
								<MySVG variant="stop" size="25px" color="black" />
							)}
						</StyledButton>
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
