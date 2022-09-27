export default function CreateWorkoutForm() {
	return (
		<>
			<p>Choose a workout type</p>
			<form>
				<label>Pick a category</label>
				<select name="category" id="categories">
					<option placeholder="choose" value="warmup">
						Warm-Up
					</option>
					<option value="saab">Saab</option>
				</select>
				<input />
			</form>
		</>
	);
}
