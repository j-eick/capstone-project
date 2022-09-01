import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	:root {
		--fontsize_title: 2.5rem;
	}

	html {
		font-size: 16px;
	}

	body {
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none;
	}
`;
