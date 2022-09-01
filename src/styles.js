import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
	}

	body {
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
		font-size: 1rem;
	}

	a {
		text-decoration: none;
	}
`;
