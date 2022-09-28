import styled, {css} from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 60vw;
	margin: -5px auto 0;
	padding: 40px 20px 20px;
	border-radius: 0 0 30px 30px;
	background-color: #fff;
	box-shadow: rgba(0, 0, 0, 0.06) 0 3px 6px, 0 2px 6px 0 darkgray inset;
	${({variant}) =>
		variant === 'editRow' &&
		css`
			border-radius: 0 0 0 0;
		`}
	font-size: var(--font_size_inputLabels);
`;

const StyledInput = styled.input`
	margin: 0 0 10px 0;
	padding: 2px;
	border-bottom: 1px solid #c3c3c3;
	border-top-style: hidden;
	border-right-style: hidden;
	border-left-style: hidden;
	&:focus {
		border-bottom: 1px solid #df7356;
		outline: none;
	}
	&::placeholder {
		text-align: right;
	}

	background-color: #fff;
`;

const StyledSubmitButton = styled.button`
	width: 60%;
	margin: auto;
	padding: 5px 0;
	border: none;
	border-radius: 20px;
	box-shadow: rgb(150 150 150 / 50%) 0 2px 2px 0;
`;

const StyledError = styled.p`
	margin: -10px 5px 10px 0;
	color: red;
	font-weight: 200;
	text-align: right;
`;

export {StyledForm, StyledInput, StyledSubmitButton, StyledError};
