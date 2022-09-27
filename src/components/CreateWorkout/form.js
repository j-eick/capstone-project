import MySVG from '../../../public/MySVG';

import {StyledForm, StyledP} from './styles';

console.clear();

export default function CreateWorkoutForm() {
	return (
		<>
			<StyledP>Choose a workout type</StyledP>
			<StyledForm>
				<label>Pick a category</label>
				<select name="category" id="categories">
					<option value="choose">choose</option>
					<option value="warmup">Warm-Up</option>
					<option value="core">Core</option>
					<option value="legs">Legs</option>
					<option value="torso">Torso</option>
					<option value="shoulders">Shoulders</option>
				</select>
			</StyledForm>
			<div>
				<StyledP>add more</StyledP>
				<button>
					<MySVG variant="plus" size="25px" color="#545454" />
				</button>
			</div>
		</>
	);
}
