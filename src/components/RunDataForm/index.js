import {useForm} from 'react-hook-form';
import Styled from 'styled-components';

/**
 * ##################### STYLING #####################
 */

const StyledForm = Styled.form`
	display: flex;
	flex-direction: column;
	width: 70vw;
	margin: 50px auto;
`;

const StyledInput = Styled.input`
	margin: 0 0 10px 0;
	&::placeholder {
		color: #c2c2c2;
}
`;

const StyledSubmitButton = Styled.button`
	width: 60%;
	margin: auto;

`;

/**
 * ##################### COMPONENT #####################
 */

export default function RunDataForm({onAddRunData}) {
	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm();

	function onSubmit(event) {
		onAddRunData(event);
		reset();
	}

	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="distance">Enter distance</label>
				<StyledInput
					type="text"
					id="distance"
					{...register('distance', {
						max: 180,
						min: 0.1,
					})}
					name="distance"
					placeholder="e.g. 7.3"
				/>
				{errors.distance && <p>Hier steht was an der Eingabe nicht stimmt.</p>}
				<label htmlFor="time">Enter time</label>
				<StyledInput
					type="text"
					id="time"
					{...register('time', {
						required: true,
						maxLength: 8,
						minLength: 5,
						pattern: /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):?)([0-5]?\d)$/,
					})}
					name="time"
					placeholder="format  ➡  hh:mm:ss"
				/>
				<label htmlFor="pace">Enter pace</label>
				<StyledInput
					type="text"
					id="pace"
					{...register('pace', {
						maxLength: 5,
						minLength: 5,
						pattern: /^(?:([0-5]?\d):)?([0-5]?\d)$/,
					})}
					name="pace"
					placeholder="format  ➡  mm:ss"
				/>
				<label htmlFor="borg">Enter borg</label>
				<StyledInput
					type="text"
					id="borg"
					{...register('borg', {
						maxLength: 2,
						max: 10,
						min: 1,
						validate: {
							positive: v => parseInt(v) >= 1,
						},
					})}
					name="borg"
					placeholder="1 - 10"
				/>
				<label htmlFor="pain">Enter pain</label>
				<StyledInput
					type="text"
					id="pain"
					{...register('pain', {
						maxLength: 2,
						max: 10,
						min: 0,
					})}
					name="pain"
					placeholder="0 - 10"
				/>
				<StyledSubmitButton type="submit">Submit</StyledSubmitButton>
			</StyledForm>
		</>
	);
}
