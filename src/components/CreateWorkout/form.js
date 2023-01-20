// import {useStore} from 'zustand';

import {useState} from 'react';

import StyledContainer from '../buttons/BlockContainer';
import ButtonPlusWithBorder from '../buttons/plus';

import {StyledForm, StyledP} from './styles';

console.clear();

export default function CreateWorkoutForm() {
	const [dropdownList, setDropdownList] = useState([]);
	// const [workout, setWorkout] = useState({});

	const Dropdown = () => {
		return (
			<>
				<StyledP>Choose a workout type</StyledP>
				<select name="category" id="categories">
					<option value="choose...">choose</option>
					<option value="warmup" id="Warm-Up">
						Warm-Up
					</option>
					<option value="core" id="Core">
						Core
					</option>
					<option value="legs" id="Legs">
						Legs
					</option>
					<option value="torso" id="Torso">
						Torso
					</option>
					<option value="shoulders" id="Shoulders">
						Shoulders
					</option>
					<option value="hit" id="HIT">
						HIT
					</option>
				</select>
			</>
		);
	};

	const handleSubmit = event => {
		event.preventDefault();
		let structure = {
			workout: event.warmup,
		};
		console.log(structure);
	};

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<Dropdown />
				{dropdownList}
				<ButtonPlusWithBorder
					type="button"
					onClick={event => {
						event.preventDefault();
						setDropdownList(dropdownList.concat(<Dropdown key={dropdownList} />));
					}}
				>
					Add more
				</ButtonPlusWithBorder>
			</StyledForm>
			<StyledContainer>
				<button type="button">Next Step</button>
			</StyledContainer>
		</>
	);
}
