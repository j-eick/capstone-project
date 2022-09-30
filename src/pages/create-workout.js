import CreateWorkout from '../components/CreateWorkout/form';
import StyledH1 from '../components/Header/StyledH1';
import StyledTitleDiv from '../components/Header/StyledTitleDiv';
import Layout from '../components/Layout';

export default function CreateWorkoutPage() {
	return (
		<Layout>
			<StyledTitleDiv>
				<StyledH1>Create Workout</StyledH1>
			</StyledTitleDiv>
			<CreateWorkout />
		</Layout>
	);
}
