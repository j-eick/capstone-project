import {useForm} from 'react-hook-form';

import StyledForm from './StyledForm';

export default function RunDataForm({onAddRunningData}) {
	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm();

	function onSubmit(data) {
		onAddRunningData(data);
		reset();
	}

	return (
		<>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<label hmtlFor="distance">Enter distance</label>
				<input
					type="text"
					id="distance"
					{...register('distance', {required: true})}
					name="distance"
					placeholder=""
				/>
				{errors.distance && <p>Hier steht was an der Eingabe nicht stimmt.</p>}
				<label hmtlFor="time">Enter time</label>
				<input type="text" id="time" {...register('time')} name="time" placeholder="" />
				<label hmtlFor="pace">Enter pace</label>
				<input type="text" id="pace" {...register('pace')} name="pace" placeholder="" />
				<label hmtlFor="borg">Enter borg</label>
				<input type="text" id="borg" {...register('borg')} name="borg" placeholder="" />
				<label hmtlFor="pain">Enter pain</label>
				<input type="text" id="pain" {...register('pain')} name="pain" placeholder="" />
				<button type="submit">Submit</button>
			</StyledForm>
		</>
	);
}
