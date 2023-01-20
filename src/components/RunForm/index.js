import {ErrorMessage} from '@hookform/error-message';
import {nanoid} from 'nanoid';
import {useForm} from 'react-hook-form';

import useStore from '../../hooks/useStore';

import {StyledForm} from './styles';
import {StyledInput} from './styles';
import {StyledSubmitButton} from './styles';
import {StyledError} from './styles';

/**
 * ##################### COMPONENT #####################
 */
export default function RunDataForm() {
	const addRunData = useStore(state => state.addRunData);

	// React Use Form
	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm();

	function correctDate() {
		const runDate = new Date().toLocaleString();
		const dateArray = runDate.split(',');
		const noYear = dateArray[0].slice(0, 5);
		return noYear;
	}

	// Structuring FormData + Submit
	function onSubmit(data) {
		let structure = {
			id: nanoid(),
			day: correctDate(),
			distance: data.distance,
			time: data.time,
			pace: data.pace,
			borg: data.borg,
			pain: data.pain,
		};
		addRunData(structure);
		reset();
	}

	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				{/* ##########################  DISTANCE  ########################## */}
				<label htmlFor="distance">Distance</label>
				<StyledInput
					type="text"
					id="distance"
					{...register('distance', {
						maxLength: {
							value: 6,
							message: 'Max. 6 characters',
						},
						minLength: {
							value: 1,
							message: 'Min. 1 character',
						},
						pattern: {
							value: /^[0-9]{1,3}([.][0-9]{1,2})?$/,
							message: 'only DOT || max. 2 decimals',
						},
						max: {
							value: 180,
							message: 'Max. value: 180',
						},
						min: {
							value: 0.1,
							massage: 'Min. value: 0,1',
						},
					})}
					name="distance"
					placeholder="max. 180"
				/>
				<ErrorMessage
					errors={errors}
					name="distance"
					render={({message}) => <StyledError>{message}</StyledError>}
				/>
				{/* ##########################  TIME  ########################## */}
				<label htmlFor="time">Time</label>
				<StyledInput
					type="text"
					id="time"
					{...register('time', {
						required: {
							value: true,
							message: 'Required',
						},
						maxLength: {
							value: 8,
							message: 'Max. 6 digits',
						},
						minLength: {
							value: 5,
							message: 'Min. 4 digits',
						},
						pattern: {
							value: /^(?:([0-5]\d):)?(?:([0-5]?\d):)?([0-5]?\d)$/,
							message: 'Format ➡ hh:mm:ss',
						},
					})}
					name="time"
					placeholder="format  ➡  hh:mm:ss"
				/>
				<ErrorMessage
					errors={errors}
					name="time"
					render={({message}) => <StyledError>{message}</StyledError>}
				/>
				{/* ##########################  PACE  ########################## */}
				<label htmlFor="pace">Pace</label>
				<StyledInput
					type="text"
					id="pace"
					{...register('pace', {
						maxLength: {
							value: 5,
							message: 'Max. 4 digits',
						},
						minLength: {
							value: 5,
							message: 'Min. 4 digits',
						},
						pattern: {
							value: /^(?:([0-5]?\d):)?([0-5]?\d)$/,
							message: 'Format ➡ mm:ss',
						},
					})}
					name="pace"
					placeholder="format  ➡  mm:ss"
				/>
				<ErrorMessage
					errors={errors}
					name="pace"
					render={({message}) => <StyledError>{message}</StyledError>}
				/>
				{/* ##########################  BORG  ########################## */}
				<label htmlFor="borg">Borg</label>
				<StyledInput
					type="text"
					id="borg"
					{...register('borg', {
						maxLength: {
							value: 2,
							message: 'Max. 2 decimals',
						},
						max: {
							value: 10,
							message: 'Max value: 10',
						},
						min: {
							value: 1,
							message: 'Min value: 1',
						},
						pattern: {
							value: /^[0-9]+$/,
							message: 'Numbers only',
						},
					})}
					name="borg"
					placeholder="1 - 10"
				/>
				<ErrorMessage
					errors={errors}
					name="borg"
					render={({message}) => <StyledError>{message}</StyledError>}
				/>
				{/* ##########################  PAIN  ############################## */}
				<label htmlFor="pain">Pain</label>
				<StyledInput
					type="text"
					id="pain"
					{...register('pain', {
						maxLength: {
							value: 2,
							message: 'Max. 2 characters',
						},
						max: {
							value: 10,
							message: 'Max. value: 10',
						},
						min: {
							value: 0,
							message: 'Min. value: 0',
						},
						pattern: {
							value: /^[0-9]+$/,
							message: 'Numbers only',
						},
					})}
					name="pain"
					placeholder="0 - 10"
				/>
				<ErrorMessage
					errors={errors}
					name="pain"
					render={({message}) => <StyledError>{message}</StyledError>}
				/>
				<StyledSubmitButton type="submit">Enter</StyledSubmitButton>
			</StyledForm>
		</>
	);
}
