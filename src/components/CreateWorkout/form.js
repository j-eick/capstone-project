import ButtonPlusWithBorder from '../buttons/plus';

import {StyledForm, StyledP} from './styles';

console.clear();

export default function CreateWorkoutForm() {
	function clickHandler(event) {
		event.preventDefault();
		console.log(event.target);
	}

	return (
		<>
			<StyledP>Choose a workout type</StyledP>
			<StyledForm>
				<label>Pick a category</label>
				<select name="category" id="categories">
					<option value="choose...">choose</option>
					<option value="warmup">Warm-Up</option>
					<option value="core">Core</option>
					<option value="legs">Legs</option>
					<option value="torso">Torso</option>
					<option value="shoulders">Shoulders</option>
					<option value="hit">HIT</option>
				</select>
			</StyledForm>
			<div>
				<ButtonPlusWithBorder type="button" onClick={clickHandler}>
					Add more
				</ButtonPlusWithBorder>
			</div>
		</>
	);
}
