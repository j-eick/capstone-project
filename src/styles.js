import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:root {
		--fontsize_title: 2.5rem;
		--wallpaper_color: #f6fafd;
		--form_input_underline: 0.75px solid black;

		/****  font | EXO 2 *****/
		--font_exo: 'Exo 2', sans-serif;
		--font_size_inputLabels: 1.2rem;
		--font_italic_text: italic;
		--font_size_tableHead: 1.5rem;
		--font_size_header: 2.5rem;
		--font_weight_header: 300;
		--font_size_tableCell: 1.4rem;

		/**** font | Roboto *****/
		--font_roboto: 'Roboto', sans-serif;
		--font_size_addRun: 1.3rem;
	}

	html {
		font-size: 62.5%;
	}

	body {
		min-height: 100vh;
		background-color: #f6fafd;
		font-family: 'Exo 2', sans-serif;
	}

	a {
		text-decoration: none;
	}
`;
