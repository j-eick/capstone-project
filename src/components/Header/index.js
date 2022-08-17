import Link from 'next/link';

import StyledHeaderContainer from './StyledHeaderContainer';

export default function Header() {
	return (
		<StyledHeaderContainer>
			<nav>
				<Link href="/">Home</Link>
				<Link href="/about">About me</Link>
			</nav>
		</StyledHeaderContainer>
	);
}
