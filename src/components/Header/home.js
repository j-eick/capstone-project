// import {useState} from 'react';
import styled from 'styled-components';

const StyledTitleDiv = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	justify-content: center;
	width: 100%;
	background-color: #a0c0d6;
	/* background-image: linear-gradient(
		120deg,
		hsl(208deg 100% 33%) 0%,
		hsl(205deg 100% 34%) 6%,
		hsl(203deg 100% 35%) 14%,
		hsl(200deg 100% 35%) 22%,
		hsl(197deg 100% 36%) 30%,
		hsl(195deg 100% 36%) 38%,
		hsl(192deg 100% 36%) 46%,
		hsl(189deg 100% 36%) 53%,
		hsl(186deg 100% 35%) 60%,
		hsl(184deg 59% 44%) 66%,
		hsl(180deg 42% 49%) 72%,
		hsl(175deg 40% 55%) 77%,
		hsl(169deg 39% 60%) 82%,
		hsl(162deg 38% 65%) 86%,
		hsl(153deg 37% 70%) 89%,
		hsl(142deg 36% 75%) 92%,
		hsl(128deg 34% 79%) 95%,
		hsl(110deg 36% 82%) 97%,
		hsl(94deg 42% 85%) 98%,
		hsl(80deg 49% 88%) 99%,
		hsl(68deg 61% 91%) 100%,
		hsl(56deg 100% 95%) 100%
	); */
	/* box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.4); */
	box-shadow: 0 -1px 2px #df7356;
`;

const StyledH1 = styled.h1`
	margin: 13px 0;
	font-size: var(--font_size_header);
	font-weight: var(--font_weight_header);
`;

export default function HomeTitle() {
	// const [title, setTitle] = useState(false);

	return (
		<StyledTitleDiv>
			<StyledH1>Dashboard</StyledH1>
		</StyledTitleDiv>
	);
}
