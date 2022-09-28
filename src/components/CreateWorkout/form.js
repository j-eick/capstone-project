// import {useStore} from 'zustand';

import {useState} from 'react';

import ButtonPlusWithBorder from '../buttons/plus';

import {StyledForm, StyledP} from './styles';

console.clear();

export default function CreateWorkoutForm() {
	// const [newCategory, setNewCategory] = useState(false);
	const [dropdownList, setDropdownList] = useState([]);

	const Dropdown = () => {
		return (
			<select name="category" id="categories">
				<option value="choose...">choose</option>
				<option value="warmup">Warm-Up</option>
				<option value="core">Core</option>
				<option value="legs">Legs</option>
				<option value="torso">Torso</option>
				<option value="shoulders">Shoulders</option>
				<option value="hit">HIT</option>
			</select>
		);
	};
	return (
		<>
			<StyledP>Choose a workout type</StyledP>
			<StyledForm>
				<label>Pick a category</label>
				<Dropdown />
				<ButtonPlusWithBorder
					type="button"
					onClick={event => {
						event.preventDefault();
						setDropdownList(dropdownList.concat(<Dropdown key={dropdownList} />));
					}}
				>
					Add more
				</ButtonPlusWithBorder>
				{dropdownList}
			</StyledForm>
		</>
	);
}
