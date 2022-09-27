export default function CreateWorkoutForm() {
	return (
		<>
			<p>Choose a workout type</p>
			<form>
				<label>Pick a category</label>
				<select name="category" id="categories">
					<option value="choose" selected>
						choose
					</option>
					<option value="warmup">Warm-Up</option>
					<option value="core">Core</option>
					<option value="legs">Legs</option>
					<option value="torso">Torso</option>
					<option value="shoulders">Shoulders</option>
				</select>
				<input />
			</form>
		</>
	);
}
